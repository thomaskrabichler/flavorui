import {
  publicProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "../../trpc"
import { type GetBlocks } from "./blocks.types"
import { blocksService } from "./service/blocks.service"
import { z } from "zod"

export const blocksRouter = createTRPCRouter({
  getAllBlocks: publicProcedure.query(async (): Promise<GetBlocks> => {
    return blocksService.getBlocks()
  }),
  getPublicVariants: publicProcedure
    .input(z.object({ blockId: z.number() }))
    .query(async ({ input }) => {
      return blocksService.getPublicVariants(input.blockId)
    }),

  getPremiumVariants: protectedProcedure
    .input(z.object({ blockId: z.number() }))
    .query(async ({ input }) => {
      return blocksService.getPremiumVariants(input.blockId)
    }),
})
