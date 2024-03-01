import { type BlockVariant } from "~/server/api/routers/blocks/repository/blocks.repository.types"
import { Container } from "../Container"

export default function BlockDetailsPage({
  variant,
}: {
  variant: BlockVariant
}) {
  return (
    <Container className="mt-10">
      <div className="flex justify-between">
        <p className="text-base font-medium text-slate-900">
          {variant.variantName}
        </p>
        <div className="flex">
          <p>Preview Button</p>
          <p>Code Button</p>
        </div>
      </div>
    </Container>
  )
}
