import { type CountryCode } from "./paddle.constants"

export type GetProducts = Product[]
export type GetProductsWithPrices = ProductWithPrices[]
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
  readonly features: string[]
}

export type Price = {
  readonly id: string
  readonly productId: string
  readonly unitAmount: string
  readonly unitPriceOverrides: UnitPriceOverride[]
  readonly status: "active" | "inactive" | null
  readonly createdAt: Date | null
  readonly updatedAt: Date | null
}

export type ProductWithPrices = Product & { prices: Price[] }

export type Money = {
  readonly amount: string
  readonly currencyCode: string
}

export type UnitPriceOverride = {
  readonly countryCodes: CountryCode[]
  readonly unitPrice: Money
}

// export type CurrencyCode = 'EUR' | 'CHF' | 'GBP';
