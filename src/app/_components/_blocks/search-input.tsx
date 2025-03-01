"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
export default function SearchInput() {
  const [text, setText] = useState<string>("")
  const router = useRouter()
  const [query] = useDebounce(text, 250)

  useEffect(() => {
    if (!query) {
      router.push(`/blocks`)
    } else {
      router.push(`/blocks?filter=${query}`)
    }
  }, [router, query])

  return (
    <div>
      <label htmlFor="search"></label>
      <div className="relative  rounded-md text-sm shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          onChange={(e) => setText(e.target.value)}
          id="search-blocks"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder="Search block sections"
        />
      </div>
    </div>
  )
}
