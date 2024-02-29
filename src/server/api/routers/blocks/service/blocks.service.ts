import {
  type GetBlocks,
  type GetPremiumBlockVariants,
  type GetPublicBlockVariants,
} from "../blocks.types"
import { blocksRepository } from "../repository/blocks.repository"

class BlocksService {
  public async getPremiumVariants(
    blockId: number,
  ): Promise<GetPremiumBlockVariants> {
    return blocksRepository.getPremiumVariantsById(blockId)
  }

  public async getPublicVariants(
    blockId: number,
  ): Promise<GetPublicBlockVariants> {
    return blocksRepository.getPublicVariantsById(blockId)
  }

  public async getBlocks(): Promise<GetBlocks> {
    return blocksRepository.getBlocks()
  }
}

export const blocksService = new BlocksService()
