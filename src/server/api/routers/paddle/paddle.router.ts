
import {
  publicProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "../../trpc"
// import { type GetBlocks } from "./blocks.types"
// import { blocksService } from "./service/blocks.service"
import { z } from "zod"
import { paddleService } from "./service/paddle.service"

export const paddleRouter = createTRPCRouter({
  getAllProducts: protectedProcedure.query(async ({ ctx }): Promise<GetProducts> => {
    return paddleService.getProducts()
    // return blocksService.getBlocks(ctx.db)
  }),
  getPublicVariants: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
    }),

  getPremiumVariants: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
    }),
})
