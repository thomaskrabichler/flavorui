export type Block = {
  id: number
  name: string
  description?: string
  category: string
  createdAt: Date
  updatedAt: Date | null
}

export type BlockVariant = {
  id: number
  blockId: number
  variantName: string
  isFree: boolean
  codeSnippet: string | null | undefined
  createdAt: Date
  updatedAt: Date | null
}
