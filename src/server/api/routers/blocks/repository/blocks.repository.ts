import { db } from "~/server/db"
import { type Block, type BlockVariant } from "./blocks.repository.types"
import { blockVariants } from "~/server/db/schema"
import { eq } from "drizzle-orm"

class BlocksRepository {
  public async getBlocks(): Promise<Block[]> {
    return await db.query.blocks.findMany()
  }

  public async getPublicVariantsById(blockId: number): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockId, blockId),
    })

    const variants: BlockVariant[] = rows.map((variant) => ({
      ...variant,
      codeSnippet: variant.isFree ? variant.codeSnippet : null,
    }))

    return variants
  }

  public async getPremiumVariantsById(
    blockId: number,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockId, blockId),
    })

    return rows
  }
}

export const blocksRepository = new BlocksRepository()
