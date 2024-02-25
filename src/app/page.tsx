import { unstable_noStore as noStore } from "next/cache"
import { CodeDemo } from "~/components/CodeDemo"
import Footer from "~/components/Footer"

import { Header } from "~/components/Header"
import Hero from "~/components/Hero"
import { LandingComponents } from "~/components/LandingComponents"

export default async function Home() {
  noStore()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CodeDemo />
        <LandingComponents />
      </main>
      <Footer />
    </>
  )
}
