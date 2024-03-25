import {
  createTRPCRouter,
  publicProcedure,
} from "../../trpc"
import { z } from "zod"
import { paddleService } from "./service/paddle.service"
import { type GetProductsWithPrices } from "./paddle.types"

export const paddleRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(
    async ({ ctx }): Promise<GetProductsWithPrices> => {
      return paddleService.getProductsFromDb(ctx.db)
      // return paddleService.getProducts(ctx.paddle)
    },
  ),

})
