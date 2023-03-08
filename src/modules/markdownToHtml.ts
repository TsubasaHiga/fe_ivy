import { remark } from 'remark'
import breaks from 'remark-breaks'
import externalLinks from 'remark-external-links'
import gfm from 'remark-gfm'
import html from 'remark-html'
import slug from 'remark-slug'

export const MarkdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(slug)
    .use(breaks)
    .use(externalLinks, {
      rel: ['nofollow', 'noopener', 'noreferrer']
    })
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString().replace(/..\/public/g, '')
}
