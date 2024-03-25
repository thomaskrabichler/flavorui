import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../trpc"
import { z } from "zod"
import { paddleService } from "./service/paddle.service"
import { type GetProducts } from "./paddle.types"

export const paddleRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(
    async ({ ctx }): Promise<GetProducts> => {
      return paddleService.getProductsFromDb(ctx.db)
      // return paddleService.getProducts(ctx.paddle)
    },
  ),

  getProductById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => paddleService.getProducts(ctx.paddle)),
})
