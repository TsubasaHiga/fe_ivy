export type WorksType = {
  // 以下はmicroCMS側で自動で付与される値
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string

  // ローンチ日付
  launchDate: string

  // カテゴリー
  category: string[]

  // 案件名
  name: string

  // サムネイル
  thumbnail?: {
    height: number
    url: string
    width: number
  }

  // 開示情報
  isDisclosure: boolean

  // 対応範囲
  workingRange: string[]

  // 使用技術
  useTechnologyList: string[]

  // URL
  url?: string
}

export type GetWorksCountType = {
  disclosureCount: number
  nonDisclosureCount: number
}

export type WorksResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: WorksType[]
}

export type CustomWorksResponse = WorksResponse & GetWorksCountType

export type SelectedCategoryListType = {
  id: string
  name: string
  isSelected: boolean
}
