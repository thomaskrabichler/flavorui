// import { postRouter } from "~/server/api/routers/post"
import { createTRPCRouter } from "~/server/api/trpc"
import { blocksRouter } from "./routers/blocks/blocks.router"
import {paddleRouter} from "./routers/paddle/paddle.router"

export const appRouter = createTRPCRouter({
  paddle: paddleRouter,
  blocks: blocksRouter,
})

export type AppRouter = typeof appRouter
