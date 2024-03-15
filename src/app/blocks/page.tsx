import { notFound } from 'next/navigation'
import { api } from "~/trpc/server"
import {Header} from '../_components/header'
import HeadingBlocks from '../_components/_blocks/heading-blocks'
import {Container} from '../_components/container'
import SearchInput from '../_components/_blocks/search-input'
import CategorySelection from '../_components/_blocks/category-selection'
import BlocksPageGrid from '../_components/_blocks/blocks-page-grid'
import Footer from '../_components/footer'

export default async function Blocks() {
  const blocks = await api.blocks.getAllBlocks.query()
  return (
    <>
      <Header />
      <main>
        <HeadingBlocks />
        <Container>
          <div className="mb-6 max-w-none  justify-between rounded-lg bg-gray-100 p-4 ring-1 ring-gray-900/10 sm:flex">
            <div className="gap-4 sm:flex">
              <SearchInput />
              <CategorySelection />
            </div>
            <p className="my-auto hidden text-sm text-gray-600 sm:block">
              Showing {blocks.length} blocks.
            </p>
          </div>
        </Container>
        <Container>
          <BlocksPageGrid blocks={blocks} />
        </Container>
      </main>
      <Footer />
    </>
  )
}
