"use client"

import Link from "next/link"
import { Logo } from "../logo"
import useCheckout from "~/app/_hooks/use-checkout"
import {
  type ProductWithPrices,
} from "~/utils/paddle/paddle.types"
import { notFound } from "next/navigation"
import { type Price } from "@paddle/paddle-node-sdk"

interface CheckoutPaddleProps {
  product: ProductWithPrices | undefined
  priceId: string | undefined
}

export default function CheckoutPaddle({
  product,
  priceId,
}: CheckoutPaddleProps) {
  if (!priceId || !product) {
    notFound()
    //TODO: Instead show error page
  }
  useCheckout({ priceId })

  return (
    <>
    <div className="overflow-auto"> 
      <div className="flex min-h-screen flex-col-reverse lg:flex-row ">
        <div className="w-full overflow-hidden lg:min-h-0 pb-28 px-4 pt-10 backdrop-blur lg:max-w-[34rem] lg:grow-0 lg:px-16 lg:shadow-2xl xl:px-20">
          <Link className="hidden lg:block" href="/" aria-label="Home">
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="mt-9 hidden space-x-2 text-sm font-medium leading-6 text-slate-700 lg:flex">
            Breadcrumbs, siehe tailwind checkout
          </div>

          <section className="mx-auto max-w-md lg:mt-12 lg:max-w-sm">
            <div className="-m-3">
              <div className="checkout-container"></div>
            </div>
          </section>
        </div>

        <div className=" px-4 lg:min-h-0 lg:min-w-0 lg:flex-1 lg:px-16 xl:px-20">
          <div className="mx-auto grid max-w-md grid-cols-1 lg:mx-0 lg:max-w-lg">
            <div className="py-10 lg:pt-28">Pricing Overview</div>
            <div>
              <p className="text-4xl font-bold text-slate-900">
                {product.prices[0]?.unitAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
