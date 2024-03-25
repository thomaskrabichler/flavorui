"use client"

import useCheckout from "~/app/_hooks/use-checkout"

interface CheckoutPaddleProps {
  priceId: string | undefined
}

export default function CheckoutPaddle({ priceId }: CheckoutPaddleProps) {
  useCheckout({ priceId })

  return (
    <>
      <div>checkout</div>
    </>
  )
}
