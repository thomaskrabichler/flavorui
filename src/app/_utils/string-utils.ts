export function formatForUrl(str: string) {
  return str.replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase()
}
