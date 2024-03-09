"use client"
import { useState } from "react"
import { Button } from "~/components/Button"
import { Container } from "~/components/Container"
import SignInPreview from "~/components/SignInPreview"

export function CodePreview() {
  const [activeView, setActiveView] = useState("code")

  return (
    <section
      id="code-demo"
      aria-label="Demo for copy and pasting a block."
      className="relative overflow-hidden pb-28 pt-24 sm:py-32"
    >
      <div className=""></div>
      <Container className="relative">
        <div className="mx-auto mb-12 text-center">
          <h2 className="text-3xl font-extrabold lg:text-4xl">
            Simply copy and paste.
          </h2>
          <p className="mt-2 px-14 text-lg">
            Copy and paste the components and blocks you want.
          </p>
        </div>
        <div className="mx-auto flex max-w-2xl justify-between lg:max-w-none">
          <p className="text-base font-semibold">Sign-in Block</p>

          <div className="flex">
            <div className="flex md:hidden">
              <button onClick={() => setActiveView("preview")}>
                iconpreview
              </button>
              <button onClick={() => setActiveView("code")}>iconcode</button>
            </div>
            <div className="hidden md:flex lg:hidden">
              <Button onClick={() => setActiveView("preview")}>Preview</Button>
              <Button onClick={() => setActiveView("code")} variant="outline">
                Code
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:flex lg:max-w-none lg:gap-3">
          {/* Code container - always visible on lg screens, toggled on smaller screens */}
          <div
            className={`h-104 rounded-xl bg-slate-900 ${activeView === "code" ? "block" : "hidden md:hidden"} lg:block lg:w-full`}
          >
            <p className="mx-auto text-white">Code Container</p>
          </div>
          <div
            className={`mx-auto h-104 max-w-[340px] rounded-lg border-2 ${activeView === "preview" ? "block" : "hidden md:hidden"} lg:block lg:w-1/3`}
          >
            <SignInPreview />
          </div>
        </div>
      </Container>
    </section>
  )
}
