import { type Paddle } from "@paddle/paddle-js"
import { api } from "~/trpc/server"
import { notFound } from "next/navigation"
interface CheckoutProps {
  paddle: Paddle | undefined
  params: { slug: string }
}
export default async function Checkout({ paddle, params }: CheckoutProps) {
  const product = await api.paddle.getProductById.query({
    id: params.slug,
  })
  if (!product || product.length === 0) {
    notFound()
  }
  return (
    <>
      <div>checkout for product {product[0]?.name}</div>
    </>
  )
}
