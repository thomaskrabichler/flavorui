import { Price, Product } from "@paddle/paddle-node-sdk"
import { type CountryCode } from "./paddle.constants"

export type GetDBProducts = DBProduct[]
export type GetDBProductsWithDBPrices = ProductWithPrices[]
export type GetDBProduct = DBProduct

export type GetDBPrices = DBPrice[]
export type GetDBPrice = DBPrice

export type DBProduct = {
  readonly id: string
  readonly name: string
  readonly description: string | null
  readonly createdAt: Date | null
  readonly updatedAt: Date | null
  readonly featured: boolean
  readonly features: string[]
}

export type DBPrice = {
  readonly id: string
  readonly productId: string
  readonly unitAmount: string
  readonly unitPriceOverrides: UnitPriceOverride[]
  readonly status: "active" | "inactive" | null
  readonly createdAt: Date | null
  readonly updatedAt: Date | null
}

export type ProductWithPrices = DBProduct & { prices: DBPrice[] }
export type ProductWithPaddlePrices = DBProduct & { prices: Price[] }

export type Money = {
  readonly amount: string
  readonly currencyCode: string
}

export type UnitPriceOverride = {
  readonly countryCodes: CountryCode[]
  readonly unitPrice: Money
}

// export type CurrencyCode = 'EUR' | 'CHF' | 'GBP';
