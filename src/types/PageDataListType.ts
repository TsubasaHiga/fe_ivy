type HierarchyType = {
  title: string
  path: string
}

export type PageNameType = 'top' | 'news'

type PageDataListType = {
  pageName: PageNameType
  title: string
  description: string
  ogType?: 'website' | 'article'
  hierarchy?: HierarchyType[]
}

export default PageDataListType
