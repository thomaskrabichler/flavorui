import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless"
import {
  type GetBlocks,
  type GetPremiumBlockVariants,
  type GetPublicBlockVariants,
} from "../blocks.types"
import { blocksRepository } from "../repository/blocks.repository"
import * as schema from "~/server/db/schema"

class BlocksService {
  public async getPremiumVariants(
    db: PlanetScaleDatabase<typeof schema>,
    blockId: number,
  ): Promise<GetPremiumBlockVariants> {
    return blocksRepository.getPremiumVariantsById(db, blockId)
  }

  public async getPublicVariants(
    db: PlanetScaleDatabase<typeof schema>,
    blockId: number,
  ): Promise<GetPublicBlockVariants> {
    return blocksRepository.getPublicVariantsById(db, blockId)
  }

  public async getBlocks(
    db: PlanetScaleDatabase<typeof schema>,
  ): Promise<GetBlocks> {
    return blocksRepository.getBlocks(db)
  }
}

export const blocksService = new BlocksService()
