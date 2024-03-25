import { useEffect } from "react"
import usePaddle from "./use-paddle"

interface UseCheckoutProps {
  priceId: string | undefined
}

const useCheckout = ({ priceId }: UseCheckoutProps) => {
  const paddle = usePaddle()

  useEffect(() => {
      console.log(priceId)
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
          settings: {
            displayMode: "inline",
            frameTarget: "checkout-container",
            frameInitialHeight: 600,
            frameStyle:
              "width: 100%; background-color: transparent; border: none;",
          },
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
