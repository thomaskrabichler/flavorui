import { unstable_noStore as noStore } from "next/cache"
import Footer from "~/components/Footer"

import { Header } from "~/components/Header"
import HeadingBlocks from "~/components/blocks/HeadingBlocks"
import FilterBlocks from "~/components/blocks/FilterBlocks"
import AllBlocks from "~/components/blocks/AllBlocks"

export default async function Blocks() {
  noStore()

  return (
    <>
      <Header />
      <main>
        <HeadingBlocks />
        <FilterBlocks />
        <AllBlocks />
      </main>
      <Footer />
    </>
  )
}
