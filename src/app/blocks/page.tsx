// import "server-only"

import Footer from "~/components/Footer"
import { unstable_noStore as noStore } from "next/cache"

import { Header } from "~/components/Header"
import HeadingBlocks from "~/components/blocks/HeadingBlocks"
import FilterBlocks from "~/components/blocks/FilterBlocks"
// import { api } from "~/trpc/react"
import { api } from "~/trpc/server"
import BlocksPageGrid from "~/components/blocks/BlocksPageGrid"
import { Container } from "~/components/Container"
import CategorySelection from "~/components/blocks/CategorySelection"
import SearchInput from "~/components/blocks/SearchInput"
import GenerateVariantsButton from "~/app/utils/generate-variants-button"
import { type CreateBlockVariant } from "~/server/api/routers/blocks/repository/blocks.repository.types"

export default async function Blocks() {
  // noStore();
  const blocks = await api.blocks.getAllBlocks.query()
  const handleVariantsGenerated = (generatedVariants: CreateBlockVariant[]) => {
    // Additional actions can be taken here, like displaying a success message
    // generatedVariants.forEach((e)=> api.)
  }
  return (
    <>
      <Header />
      <main>
        <HeadingBlocks />
        <GenerateVariantsButton
          blocks={blocks}
          onVariantsGenerated={handleVariantsGenerated}
        />
        <Container>
          <div className="mb-6 max-w-none  justify-between rounded-lg bg-gray-100 p-4 ring-1 ring-gray-900/10 sm:flex">
            <div className="gap-4 sm:flex">
              <SearchInput />
              <CategorySelection />
            </div>
            <p className="my-auto hidden text-sm text-gray-600 sm:block">
              Showing {2} blocks.
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
