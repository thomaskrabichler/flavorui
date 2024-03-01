"server-only"
import { CodeDemo } from "~/components/CodeDemo"
import Footer from "~/components/Footer"

import { Header } from "~/components/Header"
import Hero from "~/components/Hero"
import { LandingBlocks } from "~/components/LandingBlocks"
import { LandingComponents } from "~/components/LandingComponents"

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CodeDemo />
        <LandingComponents />
        <LandingBlocks />
      </main>
      <Footer />
    </>
  )
}
