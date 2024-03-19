import { api } from "~/trpc/server"
import { notFound } from "next/navigation"
import {Container} from "~/app/_components/container"
import BlockDetailsItem from "~/app/_components/_blocks/block-details-item"
import Footer from "~/app/_components/footer"
import Header from "~/app/_components/header"

export default async function BlockDetailsPage({
  params,
}: {
  params: { slug: string }
}) {
  const blockVariants = await api.blocks.getPublicVariants.query({
    slug: params.slug,
  })

  const blocks = await api.blocks.getAllBlocks.query()
  const block = blocks.find((block) => block.slug === params.slug)

  if (!block) {
    notFound()
  }

  const slug = params.slug
  return (
    <>
      <Header />
      <main>
        <Container className="pt-20">
          <h1 className="mb-2 text-3xl font-extrabold">
            {block?.name ?? slug}{" "}
          </h1>
        </Container>
        <ul role="list">
          {blockVariants.map((variant) => (
            <li key={variant.id}>
              <BlockDetailsItem variant={variant} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
