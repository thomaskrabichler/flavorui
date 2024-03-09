"use client"

import { useState } from "react"
import { type BlockVariant } from "~/server/api/routers/blocks/repository/blocks.repository.types"
import { Container } from "../Container"

import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

export default function BlockDetailsPage({
  variant,
}: {
  variant: BlockVariant
}) {
  const [activeView, setActiveView] = useState("code")

  return (
    <Container className="mt-10">
      <div className="mb-2  flex justify-between ">
        <p className="text-base font-medium text-slate-900">
          {variant.variantName}
        </p>
        <div className="flex md:hidden">
          <button
            onClick={() => setActiveView("preview")}
            className={`${activeView === "preview" ? "bg-blue-600/10" : ""} rounded-lg px-1`}
          >
            <EyeIcon
              className={`h-5 w-5 ${activeView === "preview" ? "text-blue-600" : ""}`}
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => setActiveView("code")}
            className={`${activeView === "code" ? "bg-blue-600/10" : ""} ml-2 rounded-lg px-1`}
          >
            <CodeBracketIcon
              className={`h-5 w-5 ${activeView === "code" ? "text-blue-600" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden rounded-lg md:block">
          {/* Preview Button */}
          <button
            onClick={() => setActiveView("preview")}
            className={`my-auto rounded-lg ${activeView === "preview" ? "bg-blue-600/10" : ""} `}
          >
            <div className="flex gap-2 px-3 py-2">
              <EyeIcon
                className={`my-auto h-5 w-5 ${activeView === "preview" ? "text-blue-600" : ""}`}
                aria-hidden="true"
              />
              <p>Preview</p>
            </div>
          </button>

          {/* Code Button */}
          <button
            onClick={() => setActiveView("code")}
            className={`my-auto ml-2 rounded-lg p-2 ${activeView === "code" ? "bg-blue-600/10" : ""} `}
          >
            <div className="flex gap-2">
              <CodeBracketIcon
                className={`my-auto h-5 w-5 ${activeView === "code" ? "text-blue-600" : ""}`}
                aria-hidden="true"
              />
              <p>Code</p>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`h-104 rounded-xl bg-slate-900 ${activeView === "code" ? "block" : "hidden"} ${activeView === "code" ? "block" : "hidden"}`}
      >
        <p className="mx-auto text-white">{variant.codeSnippet}</p>
      </div>
      <div
        className={`h-104 rounded-xl bg-slate-900 ${activeView === "preview" ? "block" : "hidden"} ${activeView === "preview" ? "block" : "hidden"}`}
      >
        <p className="mx-auto text-white">
          Tailwind Code or screenshot at first
        </p>
      </div>
    </Container>
  )
}
