import Link from "next/link"
import { type GetBlocks } from "~/server/api/routers/blocks/blocks.types"
import { BlockLink } from "./BlockLink"

const categoryColors: Record<string, string> = {
  Marketing: "bg-green-100 text-green-900",
  Application: "bg-blue-100 text-blue-900",
}

export default function GridBlocks({
  blocks,
}: {
  blocks: GetBlocks | undefined
}) {
  return (
    <div className="relative">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        // maybe just add a new column in the block schema for the url
      >
        {blocks !== undefined
          ? blocks.map((block, index) => (
              <li key={block.name}>
                <BlockLink slug={block.slug}>
                  <div className="group relative cursor-pointer before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      {/* img */}
                    </div>
                    <div className="flex justify-between">
                      <div className="pointer-events-none z-10">
                        <p className="mt-2 block truncate text-sm font-medium text-gray-900 group-hover:text-blue-600">
                          {block.name}
                        </p>
                        <p className="block truncate text-sm font-medium text-gray-500">
                          {/* Placeholder for block count, replace with actual data if available */}
                          countt
                        </p>
                      </div>
                      <div
                        className={`z-10 my-auto rounded-md px-2 py-1 ${categoryColors[block.category] ?? "bg-gray-100 text-gray-900"}`}
                      >
                        <p className="text-xs">{block.category}</p>
                      </div>
                    </div>
                  </div>
                </BlockLink>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}
