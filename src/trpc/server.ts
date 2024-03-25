import "server-only"

import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from "@trpc/client"
import { callProcedure } from "@trpc/server"
import { observable } from "@trpc/server/observable"
import { type TRPCErrorResponse } from "@trpc/server/rpc"
import { headers } from "next/headers"
import { cache } from "react"

import { appRouter, type AppRouter } from "~/server/api/root"
import { createTRPCContext } from "~/server/api/trpc"
import { transformer } from "./shared"
import pc from "~/server/api/common/pc"

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers())
  heads.set("x-trpc-source", "rsc")
  // heads.set(
  //   "cache-control",
  //   `s-maxage=0, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
  // )

  return createTRPCContext({
    headers: heads,
  })
})
// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createContext,
//   responseMeta(opts) {
//     const { ctx, paths, errors, type } = opts
//     // assuming you have all your public routes with the keyword `public` in them
//     const allPublic = paths && paths.every((path) => path.includes("public"))
//     // checking that no procedures errored
//     const allOk = errors.length === 0
//     // checking we're doing a query request
//     const isQuery = type === "query"
//     if (isQuery) {
//       // cache request for 1 day + revalidate once every second
//       const ONE_DAY_IN_SECONDS = 60 * 60 * 24
//       return {
//         headers: {
//           "cache-control": `s-maxage=21222, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
//         },
//       }
//     }
//     return {}
//   },
// })
export const api = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
      logger: (opts) => {
        if (opts.direction === "up") {
          console.log(pc.orange(`\n>> [tRPC ${opts.type}] ${opts.path}`))
        } else if (opts.direction === "down") {
          if (opts.result instanceof Error || "error" in opts.result.result) {
            console.log(
              pc.red(
                `<< [tRPC ${opts.path}] ${opts.elapsedMs.toFixed(2)}ms ${JSON.stringify(opts.result)}`,
              ),
            )
          } else {
            console.log(
              pc.cyan(
                `<< [tRPC ${opts.path}] ${opts.elapsedMs.toFixed(2)}ms\n`,
              ),
            )
          }
        }
      },
    }),
    /**
     * Custom RSC link that lets us invoke procedures without using http requests. Since Server
     * Components always run on the server, we can just call the procedure as a function.
     */
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              return callProcedure({
                procedures: appRouter._def.procedures,
                path: op.path,
                rawInput: op.input,
                ctx,
                type: op.type,
              })
            })
            .then((data) => {
              observer.next({ result: { data } })
              observer.complete()
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause))
            })
        }),
  ],
})
