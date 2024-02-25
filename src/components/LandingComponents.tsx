import { Button } from "./Button"
import { Container } from "./Container"
import GridComponents from "./GridComponents"

const textGradient =
  "bg-gradient-to-r from-indigo-600  to-blue-400 inline-block text-transparent bg-clip-text"

export function LandingComponents() {
  return (
    <section
      id="code-demo"
      aria-label="Demo for copy and pasting a block."
      className="relative overflow-hidden pb-28 pt-24 sm:py-32"
    >
      <div className=""></div>
      <Container className="relative">
        <div className="mx-auto mb-12 text-center">
          <h1
            className={`pb-3 text-4xl font-extrabold lg:text-5xl ${textGradient}`}
          >
            300+
          </h1>
          <h2 className="text-3xl font-extrabold lg:text-4xl">
            Flutter UI <span className="text-blue-600">Components</span>
          </h2>
          <p className="mx-auto mt-2 hidden max-w-4xl px-14 text-lg md:block">
            Over 200+ professionally designed, fully responsive component
            examples you can drop into your Flutter projects.
          </p>
          <p className="mx-auto mt-2  max-w-4xl px-14 text-lg md:hidden">
            Over 200+ professionally designed, fully responsive component
            examples.
          </p>
        </div>
        <GridComponents />
        <div className="mt-14 flex justify-center">
          <Button variant="outline">More Components</Button>
        </div>
      </Container>
    </section>
  )
}
