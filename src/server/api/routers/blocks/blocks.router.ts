import {
  publicProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "../../trpc"
import { type GetBlocks } from "./blocks.types"
import { blocksService } from "./service/blocks.service"
import { z } from "zod"

export const blocksRouter = createTRPCRouter({
  getAllBlocks: publicProcedure.query(async ({ ctx }): Promise<GetBlocks> => {
    return blocksService.getBlocks(ctx.db)
  }),
  getPublicVariants: publicProcedure
    .input(z.object({ blockId: z.number() }))
    .query(async ({ ctx, input }) => {
      return blocksService.getPublicVariants(ctx.db, input.blockId)
    }),

  getPremiumVariants: protectedProcedure
    .input(z.object({ blockId: z.number() }))
    .query(async ({ ctx, input }) => {
      return blocksService.getPremiumVariants(ctx.db, input.blockId)
    }),
})
