import {
  type GetBlocks,
  type GetPremiumBlockVariants,
  type GetPublicBlockVariants,
} from "../blocks.types"
import { blocksRepository } from "../repository/blocks.repository"
import type * as schema from "~/server/db/schema"
import { unstable_cache } from "next/cache"
import { revalidationTime } from "~/server/api/common/utils/server.constants"
import { PostgresJsDatabase } from "drizzle-orm/postgres-js"

class BlocksService {
  //TODO change planetscale to postgres
  public async getPremiumVariants(
    db: PostgresJsDatabase<typeof schema>,
    slug: string,
  ): Promise<GetPremiumBlockVariants> {
    return blocksRepository.getPremiumVariantsBySlug(db, slug)
  }

  public async getPublicVariants(
    db: PostgresJsDatabase<typeof schema>,
    slug: string,
  ): Promise<GetPublicBlockVariants> {
    const getCachedPublicVariants = unstable_cache(
      async () => blocksRepository.getPublicVariantsBySlug(db, slug),
      ["public-block-variants", slug],
      {
        revalidate: revalidationTime,
        tags: ["public-block-variants"],
      },
    )

    const variants = await getCachedPublicVariants()
    return variants
  }

  public async getBlocks(
    db: PostgresJsDatabase<typeof schema>,
  ): Promise<GetBlocks> {
    const getCachedBlocks = unstable_cache(
      async () => blocksRepository.getBlocks(db),
      ["blocks-nocode"],
      {
        revalidate: revalidationTime,
        tags: ["blocks-nocode"],
      },
    )

    const blocks = await getCachedBlocks()
    return blocks
  }
}

export const blocksService = new BlocksService()
