import { useEffect, useState } from "react"
import { initializePaddle, Paddle } from "@paddle/paddle-js"
import { Checkout } from "~/app/checkout/[slug]/page"
import CheckoutServerComponent from './CheckoutServerComponent'; 

export default async function PaddleLoader() {
  const [paddle, setPaddle] = useState<Paddle>()

  useEffect(() => {
    void (async () => {
      try {
        const paddleInstance = await initializePaddle({
          environment: "sandbox",
          token: "AUTH_TOKEN_GOES_HERE",
        })
        if (paddleInstance) {
          setPaddle(paddleInstance)
        }
      } catch (error) {
        console.error("Failed to initialize Paddle:", error)
      }
    })()
  }, [])

  return <Checkout paddle={paddle} />
}
