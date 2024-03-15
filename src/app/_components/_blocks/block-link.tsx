import Link from "next/link"

export function BlockLink({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  return <Link href={`/blocks/${slug}`}>{children}</Link>
}
