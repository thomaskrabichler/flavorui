import { type CountryCode } from "./paddle.constants"

export type GetProducts = Product[]
export type GetProduct = Product

export type GetPrices = Price[]
export type GetPrice = Price

export type Product = {
  readonly id: string
  readonly name: string
  readonly description: string | null
  readonly createdAt: Date | null
  readonly updatedAt: Date | null
  readonly featured: boolean
  readonly features: unknown
  // readonly prices: Price[] | null
}

export type Price = {
  readonly id: string
  readonly productId: string
  readonly description: string
  readonly name: string | null
  readonly unitPrice: Money
  readonly unitPriceOverrides: UnitPriceOverride[]
  readonly createdAt: string
  readonly updatedAt: string
}

export type Money = {
  readonly amount: string
  readonly currencyCode: string
}

export type UnitPriceOverride = {
  readonly countryCodes: CountryCode[]
  readonly unitPrice: Money
}

