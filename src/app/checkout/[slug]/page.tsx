import { type Paddle } from "@paddle/paddle-js"
interface CheckoutProps {
  paddle: Paddle | undefined
}
export default function Checkout({ paddle }: CheckoutProps) {
  // const openCheckout = () => {
  //   paddle?.Checkout.open({
  //     items: [{ priceId: "YOUR_PRICE_ID", quantity: 1 }],
  //   })
  // }

  return (
    <>
      {/* <main>Checkout</main> */}
      <div>
      checkoi
        {/* Your checkout UI components */}
        {/* <button onClick={openCheckout}>Checkout</button> */}
      </div>
    </>
  )
}
