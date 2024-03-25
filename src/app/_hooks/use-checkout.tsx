import { useEffect } from "react"
import usePaddle from "./use-paddle"

interface UseCheckoutProps {
  priceId: string | undefined
}

const useCheckout = ({ priceId }: UseCheckoutProps) => {
  const paddle = usePaddle()

  useEffect(() => {
    const openCheckout = () => {
      if (priceId) {
        paddle?.Checkout.open({
          items: [
            {
              priceId,
              quantity: 1,
            },
          ],
          customData: {},
          settings: {},
        })
      } else {
        console.error("Price ID is missing")
        // TODO: Handle error 
      }
    }

    openCheckout()
  }, [paddle, priceId]) 
}

export default useCheckout
