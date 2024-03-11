"use client"

import { useState } from "react"
import { type BlockVariant } from "~/server/api/routers/blocks/repository/blocks.repository.types"
import { Container } from "../container"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import prettier from "prettier/standalone"

export default function BlockDetailsPage({
  variant,
}: {
  variant: BlockVariant
}) {
  const [activeView, setActiveView] = useState("code")

  const formattedCode = prettier.format(variant.codeSnippet)
  const codeString = `class CustomButton extends StatelessWidget {
  final String platform;
  final VoidCallback onPressed;
  const CustomButton(
      {super.key, required this.platform, required this.onPressed});
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      Text("Press the below button to follow me on $platform"),
      ElevatedButton(
        onPressed: () {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text("Pressed Follow on $platform button"),
              duration: const Duration(seconds: 1),
            ),
          );
          onPressed();
        },
        child: Text("Follow on $platform"),
      )
    ]));
  }
}`
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
        <SyntaxHighlighter
          language="dart"
          style={atomOneDark}
          className="rounded-xl"
        >
          {codeString}
          {/* {formattedCode} */}
        </SyntaxHighlighter>
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
