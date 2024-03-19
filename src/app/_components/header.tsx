import { createClient } from "~/utils/supabase/server"
import { HeaderLinks } from "./header-links"

export default async function Header() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>
      <HeaderLinks user={user} />
    </div>
  )
}
