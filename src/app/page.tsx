"server-only"
import { unstable_noStore as noStore } from "next/cache"
import {Header} from "./_components/header"
import {CodeDemo} from "./_components/_landing/code-demo"
import Hero from "./_components/_landing/hero"
import {LandingComponents} from "./_components/_landing/landing-components"
import {LandingBlocks} from "./_components/_landing/landing-blocks"
import Footer from "./_components/footer"

export default async function Home() {
  // noStore()
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
