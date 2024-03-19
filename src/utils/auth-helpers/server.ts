'use server'
import { redirect } from "next/navigation"
import { createClient } from "../supabase/server"

function isValidEmail(email: string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(email)
}

export async function redirectToPath(path: string) {
  return redirect(path)
}

export async function SignOut(formData: FormData) {
  const pathName = String(formData.get("pathName")).trim()

  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log("error signing out")
    // return getErrorRedirect(
    //   pathName,
    //   'Hmm... Something went wrong.',
    //   'You could not be signed out.'
    // );
  }

  return "/login"
}
