export type PageKindType = 'article' | 'fixed'

export type PageKindListTypeList = {
  [key in PageKindType]: {
    publishedTitle: string
    updatedTitle: string
  }
}
