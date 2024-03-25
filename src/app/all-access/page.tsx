import { api } from "~/trpc/server"
import Footer from "../_components/footer"
import Header from "../_components/header"
import { CheckIcon } from "@heroicons/react/20/solid"
import CheckoutButton from "../_components/_checkout/checkout-button"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default async function AllAccess() {
  const products = await api.paddle.getAllProducts.query()
  return (
    <>
      <Header />
      <div className="relative isolate bg-white px-6 py-24 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#4f46e5] to-[#93c5fd] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            All-access
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pay once, use forever
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
          reprehenderit in aliquid fugiat dolorum voluptatibus.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {products.map((product, tierIdx) => (
            <div
              key={product.id}
              className={classNames(
                product.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                product.featured
                  ? ""
                  : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                    : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
              )}
            >
              <h3
                id={product.id}
                className={classNames(
                  product.featured ? "text-blue-400" : "text-blue-600",
                  "text-base font-semibold leading-7",
                )}
              >
                {product.name}
              </h3>
              <div className="mt-4 flex gap-x-4">
                <p>
                  <span
                    className={classNames(
                      product.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-bold tracking-tight",
                    )}
                  >
                    {`€${product.prices[0]?.unitAmount}`}
                  </span>
                </p>
                <div
                  className={classNames(
                    product.featured ? "text-white" : "text-gray-900",
                    "text-sm",
                  )}
                >
                  <p className="font-semibold">one-time-payment</p>
                  <p
                    className={classNames(
                      product.featured ? "text-slate-400" : "text-slate-500",
                    )}
                  >
                    plus local taxes
                  </p>
                </div>
              </div>

              <a
                href={`/checkout/${product.id}`}
                aria-describedby={product.id}
                className={classNames(
                  product.featured
                    ? "bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500"
                    : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 focus-visible:outline-blue-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
                )}
              >
                Get all-access
              </a>
              <ul
                role="list"
                className={classNames(
                  product.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10",
                )}
              >
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        product.featured ? "text-blue-400" : "text-blue-600",
                        "h-6 w-5 flex-none",
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <CheckoutButton />
      <Footer />
    </>
  )
}
