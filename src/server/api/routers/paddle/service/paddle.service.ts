import { type Product, type Paddle, type Price } from "@paddle/paddle-node-sdk"
import { GetPrices, type GetProducts } from "../paddle.types"

type ProductWithPrices = Product & { prices: Price[] }

class PaddleService {
  public async getProducts(paddle: Paddle): Promise<GetProducts> {
    const productCollection = paddle.products.list()
    const products = await productCollection.next()

    return products
  }

  public async getPrices(paddle: Paddle): Promise<GetPrices> {
    const pricesCollection = paddle.prices.list()
    const prices = await pricesCollection.next()

    return prices
  }

  public async getProductsWithPrices(
    paddle: Paddle,
  ): Promise<ProductWithPrices[]> {
    const productCollection = paddle.products.list()
    const products = await productCollection.next()

    const productWithPrices: ProductWithPrices[] = await Promise.all(
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
