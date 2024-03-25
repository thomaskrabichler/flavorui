import { createTRPCRouter, publicProcedure } from "../../trpc"
import { z } from "zod"
import { paddleService } from "./service/paddle.service"
import { type GetProductsWithPrices } from "~/utils/paddle/paddle.types"

export const paddleRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(
    async ({ ctx }): Promise<GetProductsWithPrices> => {
      return paddleService.getProductsFromDb(ctx.db)
    },
  ),

  getProductById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return paddleService.getProductsFromDb(ctx.db, input.id)
    }),

  getPaddlePrice: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return paddleService.getPriceById(ctx.paddle, input.id)
    }),
})
