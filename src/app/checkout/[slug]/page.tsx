import { type Paddle } from "@paddle/paddle-js"
import { api } from "~/trpc/server"
import { notFound } from "next/navigation"
import CheckoutPaddle from "~/app/_components/_checkout/checkout-paddle"
interface CheckoutProps {
  params: { slug: string }
}
export default async function Checkout({  params }: CheckoutProps) {
  const product = await api.paddle.getProductById.query({
    id: params.slug,
  })

  if (!product || product.length === 0) {
    notFound()
  }

  return (
    <>
      <CheckoutPaddle priceId={product[0]?.prices[0]?.id} />
    </>
  )
}
