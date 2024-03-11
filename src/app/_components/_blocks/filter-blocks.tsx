import { Container } from "../container"
import CategorySelection from "./category-selection"
import SearchInput from "./search-input"

export default function FilterBlocks({ blocksCount }: { blocksCount: number }) {
  return (
    <Container>
      <div className="mb-6 max-w-none  justify-between rounded-lg bg-gray-100 p-4 ring-1 ring-gray-900/10 sm:flex">
        <div className="gap-4 sm:flex">
          <SearchInput />
          <CategorySelection />
        </div>
        <p className="my-auto hidden text-sm text-gray-600 sm:block">
          Showing {blocksCount} blocks.
        </p>
      </div>
    </Container>
  )
}
