import { type GetProductsWithPrices } from "../paddle.types"
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js"
import type * as schema from "~/server/db/schema"
import { prices, products } from "~/server/db/schema"
import { eq } from "drizzle-orm"
import { type Paddle, type Price, type Product } from "@paddle/paddle-node-sdk"

type PaddleProductWithPrices = Product & { prices: Price[] }
class PaddleService {

  /**
   * Retrieves a list of products from the database.
   * This function is primarily used for the all-access page to improve response times.
   *
   * @param db - The database object.
   * @returns A Promise that resolves to an array of Product objects.
   */
  public async getProductsFromDb(
    db: PostgresJsDatabase<typeof schema>,
  ): Promise<GetProductsWithPrices> {
    const result = await db
      .select()
      .from(products)
      .innerJoin(prices, eq(products.id, prices.productId))

    const productsWithPrices = result.reduce(
      (acc: GetProductsWithPrices, item) => {
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
      },
      [],
    )

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

  public async getPrices(paddle: Paddle): Promise<Price[]> {
    const pricesCollection = paddle.prices.list()
    const prices = await pricesCollection.next()

    return prices
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
