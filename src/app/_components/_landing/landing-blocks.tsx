import Link from "next/dist/client/link"
import { Button } from "../button"
import { Container } from "../container"
import GridBlocks from "./grid-blocks"
import GridComponents from "./grid-components"

const textGradient =
  "bg-gradient-to-r from-indigo-600  to-blue-400 inline-block text-transparent bg-clip-text"

export function LandingBlocks() {
  return (
    <section
      id="code-demo"
      aria-label="Demo for copy and pasting a block."
      className="relative overflow-hidden pb-28 pt-24 sm:py-32"
    >
      <div className=""></div>
      <Container className="relative">
        <div className="mb-12 ">
          <h2 className="text-3xl font-extrabold lg:text-4xl">
            Rapid building with <span className="text-blue-600">Blocks</span>
          </h2>
          <p className=" mt-2  max-w-2xl  text-lg ">
            Get started with over 130+ block sections coded with Dart to build
            high-quality mobile app pages.
          </p>
        </div>
        <GridBlocks />
        <Link href="/blocks">
          <div className="mt-14 flex justify-center">
            <Button variant="outline">More Blocks</Button>
          </div>
        </Link>
      </Container>
    </section>
  )
}
