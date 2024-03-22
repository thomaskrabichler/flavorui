// import { db } from "~/server/db"
import { type Block, type BlockVariant } from "./blocks.repository.types"
import { blockVariants } from "~/server/db/schema"
import { eq } from "drizzle-orm"
import { Logger } from "~/server/api/common/logger"
import type * as schema from "~/server/db/schema"
import { PostgresJsDatabase } from "drizzle-orm/postgres-js"

class BlocksRepository {
  // private readonly logger = new Logger(BlocksRepository.name);

  public async getBlocks(
    db: PostgresJsDatabase<typeof schema>,
  ): Promise<Block[]> {
    return await db.query.blocks.findMany()
  }

  public async getPublicVariantsBySlug(
    db: PostgresJsDatabase<typeof schema>,
    slug: string,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockSlug, slug),
    })

    const variants: BlockVariant[] = rows.map((variant) => ({
      ...variant,
      codeSnippet: variant.isFree ? variant.codeSnippet : '',
    }))

    return variants
  }

  public async getPremiumVariantsBySlug(
    db: PostgresJsDatabase<typeof schema>,
    slug: string,
  ): Promise<BlockVariant[]> {
    const rows = await db.query.blockVariants.findMany({
      where: eq(blockVariants.blockSlug, slug),
    })

    return rows
  }
}

export const blocksRepository = new BlocksRepository()
