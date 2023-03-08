import type { PageType } from '@type/PageType'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import { join } from 'path'

export const pagesDirectory = join(process.cwd(), '_pages')

export const getSlugs = (dir: string): string[] => fs.readdirSync(dir)

// PageTypeから'title', 'description', 'publishedAt', 'updatedAt'を取り出した型を作成
export type DataType = Pick<PageType, 'title' | 'description' | 'publishedAt' | 'updatedAt'>

export type MatterType = {
  data: DataType
  content: string
}

/**
 * slugからページ情報を取得
 * @param slug
 * @param fields
 * @returns
 */
export const getPageBySlug = (slug: string): PageType => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pagesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // GrayMatterFile.dataをMatterTypeにした型を作成
  const matterResult = matter(fileContents) as GrayMatterFile<string> & MatterType
  const { data, content } = matterResult

  return {
    slug: realSlug,
    ...data,
    content
  }
}

/**
 *
 * @returns '_page/'ディレクトリ配下にある全てのページ情報を取得
 */
export const getAllPages = (): PageType[] => {
  const slugs = getSlugs(pagesDirectory)
  return slugs.map((slug) => getPageBySlug(slug))
}
