import Link from "next/link"
import { Button } from "../button"
import { Container } from "../container"
import Features from "../features"

export default function Hero() {
  return (
    <div className="pb-8">
      <Container className="pt-16 lg:flex ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:mt-24 lg:flex-shrink-0">
          <h1 className="text-4xl font-extrabold  text-gray-900 sm:text-7xl">
            Build <span className="text-blue-600">Flutter</span> apps even
            faster with Flavor UI.
          </h1>
          <p className="mt-6 w-auto text-lg leading-8 text-gray-600">
            Move faster with beautiful, responsive UI components, blocks and
            templates hand crafted in modern design.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button href="/components" color="slate">
              Browse Components
            </Button>
            <Link href="/blocks">
              <Button color="slate" variant="outline">
                Explore Blocks
              </Button>
            </Link>
          </div>
        </div>
        {/* Screenshot */}
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"> */}
        {/*   <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"> */}
        {/*     <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"> */}
        {/*       <img */}
        {/*         src="https://tailwindui.com/img/component-images/project-app-screenshot.png" */}
        {/*         alt="App screenshot" */}
        {/*         width={2432} */}
        {/*         height={1442} */}
        {/*         className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" */}
        {/*       /> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </Container>
      <Features />
    </div>
  )
}
