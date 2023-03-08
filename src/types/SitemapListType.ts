export type SitemapItemType = {
  title: string
  link: string
  isBlank?: boolean
}

export type SitemapListType = {
  title: string
  link: string
  isBlank?: boolean
  list?: SitemapItemType[]
}
