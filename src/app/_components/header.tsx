import { createClient } from "~/utils/supabase/server"
import { HeaderLinks } from "./header-links"

export default async function Header() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div>
      <HeaderLinks user={session?.user} />
    </div>
  )
}
