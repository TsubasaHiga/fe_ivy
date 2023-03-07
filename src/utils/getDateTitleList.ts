import { pageKindListType } from '@const/values'
import type { PageKindType } from '@type/PageType'

const GetDateTitleList = (pageType: PageKindType) => {
  return {
    published: pageKindListType[pageType].publishedTitle,
    updated: pageKindListType[pageType].updatedTitle
  }
}

export default GetDateTitleList
