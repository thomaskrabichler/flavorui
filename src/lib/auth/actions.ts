/* eslint @typescript-eslint/no-explicit-any:0, @typescript-eslint/prefer-optional-chain:0 */
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { generateId, Scrypt } from "lucia"
import { isWithinExpirationDate, TimeSpan, createDate } from "oslo"
import { generateRandomString, alphabet } from "oslo/crypto"
import { eq } from "drizzle-orm"
import { lucia } from "~/lib/auth"
import { Argon2id } from "oslo/password"
import { db } from "~/server/db"
import {
  loginSchema,
  signupSchema,
  type LoginInput,
  type SignupInput,
  resetPasswordSchema,
} from "~/lib/validators/auth"
import { users } from "~/server/db/schema"

export interface ActionResponse<T> {
  fieldError?: Partial<Record<keyof T, string | undefined>>
  formError?: string
}

export async function login(
  _: any,
  formData: FormData,
): Promise<ActionResponse<LoginInput>> {
  const obj = Object.fromEntries(formData.entries())

  const parsed = loginSchema.safeParse(obj)
  if (!parsed.success) {
    const err = parsed.error.flatten()
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    }
  }

  const { email, password } = parsed.data

  const existingUser = await db.query.users.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  })

  if (!existingUser) {
    return {
      formError: "Incorrect email or password",
    }
  }

  if (!existingUser || !existingUser?.hashedPassword) {
    return {
      formError: "Incorrect email or password",
    }
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashedPassword,
    password,
  )
  if (!validPassword) {
    return {
      formError: "Incorrect email or password",
    }
  }

  const session = await lucia.createSession(existingUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  return redirect("/")
}

export async function signUp(
  _: any,
  formData: FormData,
): Promise<ActionResponse<SignupInput>> {
  "use server"
  const obj = Object.fromEntries(formData.entries())
  const parsed = signupSchema.safeParse(obj)

  if (!parsed.success) {
    const err = parsed.error.flatten()
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    }
  }

  const { email, password } = parsed.data

  const existingUser = await db.query.users.findFirst({
    where: (table, { eq }) => eq(table.email, email),
    columns: { email: true },
  })

  if (existingUser) {
    return {
      formError: "User with that email already exists.",
    }
  }

  const userId = generateId(21)
  const hashedPassword = await new Argon2id().hash(password)

  await db.insert(users).values({
    id: userId,
    email,
    hashedPassword,
  })

  //TODO: Maybe add email verification
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  return redirect("/")
}
