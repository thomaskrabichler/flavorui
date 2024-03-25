import { type PostgresJsDatabase } from "drizzle-orm/postgres-js"
import type * as schema from "~/server/db/schema"
import { prices, products } from "~/server/db/schema"
import { eq } from "drizzle-orm"
import { type Paddle, type Price, type Product } from "@paddle/paddle-node-sdk"
import { unstable_cache } from "next/cache"
import { revalidationTime } from "~/server/api/common/utils/server.constants"
import { GetProductsWithPrices } from "~/utils/paddle/paddle.types"

type PaddleProductWithPrices = Product & { prices: Price[] }
class PaddleService {
  /**
   * Retrieves a list of products from the database.
   * This function is primarily used for the all-access page to improve response times.
   *
   * @paramt productId - The ID of the product to retrieve. If not provided, all products will be returned.
   * @param db - The database object.
   * @returns A Promise that resolves to an array of Product objects.
   */

  public async getProductsFromDb(
    db: PostgresJsDatabase<typeof schema>,
    productId?: string,
  ): Promise<GetProductsWithPrices> {
    //TODO: make caching optional (needed for checkout page, as the price
    //needs to be up to date always)

    const cacheKey = productId ? `products-${productId}` : "all-products"

    const getCachedProducts = unstable_cache(
      async () => {
        const allProductsQuery = db
          .select()
          .from(products)
          .innerJoin(prices, eq(products.id, prices.productId))

        const query =
          productId !== undefined
            ? db
                .select()
                .from(products)
                .where(eq(products.id, productId))
                .innerJoin(prices, eq(products.id, prices.productId))
            : allProductsQuery

        const result = await query

        return result.reduce((acc: GetProductsWithPrices, item) => {
          const { product, price } = item

          let productEntry = acc.find((p) => p.id === product.id)
          if (!productEntry) {
            productEntry = { ...product, prices: [] }
            acc.push(productEntry)
          }

          productEntry.prices.push({
            ...price,
            unitPriceOverrides: price.unitPriceOverrides,
          })

          return acc
        }, [])
      },
      [cacheKey],
      {
        revalidate: revalidationTime,
        tags: [cacheKey],
      },
    )

    // Fetch and return the cached products
    const productsWithPrices = await getCachedProducts()
    return productsWithPrices
  }
  /**
   * Calls the Paddle API to get a list of products without prices.
   *
   * @param paddle - The Paddle object to use for making API calls.
   * @returns A Promise that resolves to an array of Product objects.
   */
  public async getProducts(paddle: Paddle): Promise<Product[]> {
    const productCollection = paddle.products.list()
    const products = await productCollection.next()
    return products
  }

  //TODO: Write new function that returns the product from the db and the price from Paddle and return
  // as one object

  public async getAllPrices(paddle: Paddle, priceId: string): Promise<Price[]> {
    const pricesCollection = paddle.prices.list({ productId: [priceId] })
    const prices = await pricesCollection.next()

    return prices
  }

  public async getPricesByProductId(
    paddle: Paddle,
    productId: string,
  ): Promise<Price[]> {
    const pricesCollection = paddle.prices.list({ productId: [productId] })
    const prices = await pricesCollection.next()

    return prices
  }

  public async getPriceById(paddle: Paddle, priceId: string): Promise<Price> {
    const price = await paddle.prices.get(priceId)
    return price
  }

  /**
   * Calls the Paddle API to get a list of products, each with its associated prices.
   *
   * @param paddle - The Paddle object to use for making API calls.
   * @returns A Promise that resolves to an array of PaddleProductWithPrices objects.
   */

  public async getProductsWithPrices(
    paddle: Paddle,
  ): Promise<PaddleProductWithPrices[]> {
    const productCollection = paddle.products.list()
    const products = await productCollection.next()

    const productWithPrices: PaddleProductWithPrices[] = await Promise.all(
      products.map(async (product) => {
        const pricesCollection = paddle.prices.list({ productId: [product.id] })
        const prices = await pricesCollection.next()
        return {
          ...product,
          prices: prices,
        }
      }),
    )
    return productWithPrices
  }
}

export const paddleService = new PaddleService()
