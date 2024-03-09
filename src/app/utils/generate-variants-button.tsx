import React from "react"
import {
  type Block,
  type CreateBlockVariant,
} from "~/server/api/routers/blocks/repository/blocks.repository.types"

interface GenerateVariantsButtonProps {
  blocks: Block[]
  onVariantsGenerated: (variants: CreateBlockVariant[]) => void
}

const GenerateVariantsButton: React.FC<GenerateVariantsButtonProps> = ({
  blocks,
  onVariantsGenerated,
}) => {
  const generateBlockVariants = () => {
    const variants: CreateBlockVariant[] = blocks.flatMap((block) => {
      return [1, 2].map((i) => ({
        blockSlug: block.slug,
        variantName: `${block.name} Variant ${i}`,
        isFree: true,
        codeSnippet: `<code snippet for ${block.name} Variant ${i} />`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    })

    onVariantsGenerated(variants)
  }

  return (
    <button onClick={generateBlockVariants}>Generate Block Variants</button>
  )
}
export default GenerateVariantsButton
