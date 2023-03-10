import type { NewsResponse, NewsType } from '@type/NewsType'
import type { CustomWorksResponse, GetWorksCountType, WorksResponse } from '@type/WorksType'
import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

// SDK
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || ''
})

// 実績一覧のコンテンツ数を取得
export const getWorksCounts = async (): Promise<GetWorksCountType> => {
  const data = await client.get<WorksResponse>({ endpoint: 'works' })
  return {
    disclosureCount: data.contents.filter((content) => content.isDisclosure).length,
    nonDisclosureCount: data.contents.filter((content) => !content.isDisclosure).length
  }
}

/**
 * 実績一覧取得
 * 例）await getWorks({ fields: ["id", "title"] })
 * @param queries
 * @returns
 */
export const getWorks = async ({
  isDisclosure = true,
  addQueries
}: {
  isDisclosure: boolean
  addQueries?: MicroCMSQueries
}): Promise<CustomWorksResponse> => {
  // デフォルトで公開済みのみ取得
  const filter = isDisclosure ? 'isDisclosure[equals]true' : ''
  const queries = {
    ...addQueries,
    filters: filter,
    orders: '-launchDate'
  }

  // Promise.allで並列処理
  const [data, counts] = await Promise.all([
    client.get<WorksResponse>({ endpoint: 'works', queries }),
    getWorksCounts()
  ])

  return {
    ...data,
    ...counts
  }
}

/**
 * お知らせ一覧取得
 * 例）await getNews({ fields: ["id", "title"] })
 * @param addQueries
 * @returns
 */
export const getNews = async (addQueries?: MicroCMSQueries) => {
  // デフォルトのqueries
  const queries = {
    ...addQueries,
    orders: '-publishedAt'
  }
  return await client.get<NewsResponse>({ endpoint: 'news', queries })
}

/**
 * お知らせ詳細取得
 * 例）await getWorksDetail(contentId, { fields: ["id", "title"] })
 * @param contentId
 * @param queries
 * @returns
 */
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<NewsType>({
    endpoint: 'news',
    contentId,
    queries
  })
}
