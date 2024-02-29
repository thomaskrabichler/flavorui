import { postRouter } from "~/server/api/routers/post"
import { createTRPCRouter } from "~/server/api/trpc"
import { blocksRouter } from "./routers/blocks/blocks.router"

export const appRouter = createTRPCRouter({
  post: postRouter,
  blocks: blocksRouter,
})

export type AppRouter = typeof appRouter
