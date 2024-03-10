export type Block = {
  id: number
  name: string
  slug: string
  description?: string
  category: string
  imagePath: string | null | undefined
  createdAt: Date
  updatedAt: Date | null
}

export type BlockVariant = {
  id: number
  blockSlug: string
  variantName: string
  isFree: boolean
  codeSnippet: string
  // codeSnippet: string | null | undefined
  createdAt: Date
  updatedAt: Date | null
}

export type CreateBlockVariant = {
  blockSlug: string
  variantName: string
  isFree: boolean
  codeSnippet: string | null | undefined
  createdAt: Date
  updatedAt: Date | null
}
