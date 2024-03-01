// import { db } from "~/server/db"
import { type Block, type BlockVariant } from "./blocks.repository.types"
import { blockVariants } from "~/server/db/schema"
import { eq } from "drizzle-orm"
import { Logger } from "~/server/api/common/logger"
import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless"
import * as schema from "~/server/db/schema"

class BlocksRepository {
  // private readonly logger = new Logger(BlocksRepository.name);

  public async getBlocks(
    db: PlanetScaleDatabase<typeof schema>,
  ): Promise<Block[]> {
    return await db.query.blocks.findMany()
  }

  public async getPublicVariantsById(
    db: PlanetScaleDatabase<typeof schema>,
    blockId: number,
  ): Promise<BlockVariant[]> {
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
    db: PlanetScaleDatabase<typeof schema>,
    blockId: number,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockId, blockId),
    })

    return rows
  }
}

export const blocksRepository = new BlocksRepository()
