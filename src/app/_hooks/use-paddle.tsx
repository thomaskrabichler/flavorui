"use client"
import {
  initializePaddle,
  type InitializePaddleOptions,
  type Paddle,
} from "@paddle/paddle-js"
import react from "react"
import {env} from "~/env"

export default function usePaddle() {
  const [paddle, setPaddle] = react.useState<Paddle>()
  react.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initializePaddle({
      environment: env.NEXT_PUBLIC_PADDLE_ENV,
      token: env.NEXT_PUBLIC_PADDLE_CLIENT_API_KEY,
      seller: Number(env.NEXT_PUBLIC_PADDLE_SELLER_ID),
    } as unknown as InitializePaddleOptions).then(
      (paddleInstance: Paddle | undefined) => {
        if (paddleInstance) {
          setPaddle(paddleInstance)
        }
      },
    )
  }, [])

  return paddle
}
