export type NewsType = {
  // 以下はmicroCMS側で自動で付与される値
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string

  // title
  title: string

  // content
  content: string
}

export type NewsResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: NewsType[]
}
