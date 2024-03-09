import Link from "next/link"

export function BlockLink({
  // blockType,
  slug,
  children,
}: {
  // blockType: string
  slug: string
  children: React.ReactNode
}) {
  return <Link href={`/blocks/${slug}`}>{children}</Link>
}
