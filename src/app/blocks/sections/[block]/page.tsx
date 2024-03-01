import { Container } from "~/components/Container"
import Footer from "~/components/Footer"
import { Header } from "~/components/Header"
import BlockDetailsItem from "~/components/blocks/BlockDetailsItem"
import { api } from "~/trpc/server"

export default async function BlockDetailsPage({
  params,
}: {
  params: { block: string }
}) {
  const blockVariants = await api.blocks.getPublicVariants.query({ blockId: 8 })
  return (
    <>
      <Header />
      <main>
        <Container className="pt-20">
          <h1 className="mb-2 text-3xl font-extrabold">Pricing Sections</h1>
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
