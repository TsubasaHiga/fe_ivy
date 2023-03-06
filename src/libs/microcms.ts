import type { NewsResponse, NewsType } from '@type/NewsType'
import type { WorksResponse, WorksType } from '@type/WorksType'
import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

// SDK
const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ''
})

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
}) => {
  // デフォルトで公開済みのみ取得
  const filter = isDisclosure ? 'isDisclosure[equals]true' : ''
  const queries = {
    ...addQueries,
    filters: filter,
    orders: '-launchDate'
  }
  return await client.get<WorksResponse>({ endpoint: 'works', queries })
}

/**
 * 実績詳細取得
 * 例）await getWorksDetail(contentId, { fields: ["id", "title"] })
 * @param contentId
 * @param queries
 * @returns
 */
export const getWorksDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<WorksType>({
    endpoint: 'works',
    contentId,
    queries
  })
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
