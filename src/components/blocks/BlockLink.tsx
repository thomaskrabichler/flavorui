import Link from "next/link"
import { formatForUrl } from "~/app/utils/string-utils"

export function BlockLink({
  blockType,
  blockName,
  children,
}: {
  blockType: string
  blockName: string
  children: React.ReactNode
}) {
  const formattedName = formatForUrl(blockName)

  return <Link href={`/blocks/${blockType}/${formattedName}`}>{children}</Link>
}
