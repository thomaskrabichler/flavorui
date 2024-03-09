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

  public async getPublicVariantsBySlug(
    db: PlanetScaleDatabase<typeof schema>,
    slug: string,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockSlug, slug),
    })

    const variants: BlockVariant[] = rows.map((variant) => ({
      ...variant,
      codeSnippet: variant.isFree ? variant.codeSnippet : null,
    }))

    return variants
  }

  public async getPremiumVariantsBySlug(
    db: PlanetScaleDatabase<typeof schema>,
    slug: string,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockSlug, slug),
    })

    return rows
  }
}

export const blocksRepository = new BlocksRepository()
