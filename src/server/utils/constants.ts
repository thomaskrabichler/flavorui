import { type UnitPriceOverride } from "../api/routers/paddle/paddle.types"
export const defaultFeatures: string[] = ["Lifetime access, Free updates"]
export const defaultUnitPriceOverrides: UnitPriceOverride[] = [
  {
    countryCodes: ["AT", "DE"],
    unitPrice: {
      amount: "",
      currencyCode: "EUR",
    },
  },
  {
    countryCodes: ["CH"],
    unitPrice: {
      amount: "",
      currencyCode: "CHF",
    },
  },
  {
    countryCodes: ["GB"],
    unitPrice: {
      amount: "",
      currencyCode: "GBP",
    },
  },
]
