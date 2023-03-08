import type { PageKindListTypeList } from '@/types/PageKindType'

// 共通で使用する定数
export const values = {
  // ブレイクポイント
  BREAKPOINT: 767
} as const

// 各種リンク
export const links = {
  // 技術ブログ
  BLOG: 'https://cofus.blog',

  // Chrome拡張機能リスト
  CHROME_EXTENSIONS: 'https://chrome-extensions.cofus.work',

  // Slim Chatwork公式サイト
  SLIM_CHATWORK: 'https://slimchatwork.cofus.work',

  // GitHub
  GITHUB: 'https://github.com/TsubasaHiga',

  // Chatwork
  CHATWORK: 'https://www.chatwork.com/higatsubasa',

  // Slack
  SLACK: 'https://join.slack.com/t/cofushq/shared_invite/zt-1qtut9agw-PNUo3SOxLfEFN772YmNkPQ',

  // note
  NOTE: 'https://note.mu/higatsubasa'
} as const

// 各種SNSリンク
export const snsLinks = {
  // Twitter
  TWITTER: 'https://twitter.com/_cofus',

  // Facebook
  FACEBOOK: 'https://www.facebook.com/tsubasahiga1226',

  // Misskey
  MISSKEY: 'https://misskey.io/@higatsubasa'
}

// ページタイプと更新日・変更日のタイトルの関連リスト
export const pageKindListType: PageKindListTypeList = {
  article: {
    publishedTitle: '投稿日',
    updatedTitle: '更新日'
  },
  fixed: {
    publishedTitle: '制定日',
    updatedTitle: '改定日'
  }
}
