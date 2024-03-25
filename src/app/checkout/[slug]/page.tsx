import { type Paddle } from "@paddle/paddle-js"
import { api } from "~/trpc/server"
import { notFound } from "next/navigation"
import CheckoutPaddle from "~/app/_components/_checkout/checkout-paddle"
interface CheckoutProps {
  params: { slug: string }
}
export default async function Checkout({ params }: CheckoutProps) {
  //Maybe fetch directly from the Paddle API for consistency
  const product = await api.paddle.getProductById.query({
    id: params.slug,
  })
  //TODO: Write new function that returns the product from the db and the price from Paddle and return
  // as one object
  {/* const price = await api.paddle.getPaddlePrice.query({ */}
  {/*   id: params.slug, */}
  {/* }) */}

  if (!product || product.length === 0) {
    notFound()
  }

  return (
    <>
      <CheckoutPaddle product={product[0]} priceId={product[0]?.prices[0]?.id} />
    </>
  )
}
