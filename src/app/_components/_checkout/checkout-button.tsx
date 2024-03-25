"use client"

import usePaddle from "~/app/_hooks/use-paddle"


export default function CheckoutButton() {
  const paddle = usePaddle()

  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [
        {
          priceId: "pri_01hse3t9ytgpnwn5ym2ywa3gnp",
          quantity: 1,
        },
      ],
      customData: {},
      settings: {},
    })
  }

  return <button onClick={openCheckout}>Checkout Overlay (Test)</button>
}
