/* eslint-disable @typescript-eslint/no-empty-interface */
import { Lucia, TimeSpan } from "lucia"
import { DrizzleMySQLAdapter } from "@lucia-auth/adapter-drizzle"
import { env } from "~/env.js"
import { db } from "~/server/db"

import { sessions, users, type User as DbUser } from "~/server/db/schema"

const adapter = new DrizzleMySQLAdapter(db, sessions, users)

export const lucia = new Lucia(adapter, {
  getSessionAttributes: (/* attributes */) => {
    return {}
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      email: attributes.email,
      licenseKey: attributes.licenseKey,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    }
  },
  sessionExpiresIn: new TimeSpan(30, "d"),
  sessionCookie: {
    name: "session",

    expires: false,
    attributes: {
      secure: env.NODE_ENV === "production",
    },
  },
})

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
    DatabaseSessionAttributes: DatabaseSessionAttributes
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes extends Omit<DbUser, "hashedPassword"> {}
