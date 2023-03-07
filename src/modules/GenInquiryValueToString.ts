import type { InquiryKeyType, InquiryType } from '@type/InquiryType'

/**
 * 以下のような文字列を生成する
 *
 * ------------------------------------
 * cofus.workからのお問い合わせ
 * ------------------------------------
 *
 * ■ お名前（必須）
 * 田中太郎
 *
 * ■ 会社名・組織名（任意）
 * 株式会社cofus
 *
 * ■ お問い合わせの種類（必須）
 * お仕事の依頼
 *
 * ■ 内容（必須）
 * お問い合わせの内容
 *
 * ※この内容をそのままコピー&ペーストして送信頂けます。
 */
const GenInquiryValueToString = (inquiry: InquiryType): string => {
  const inquiryValue = Object.keys(inquiry).reduce((acc, key) => {
    const item = inquiry[key as InquiryKeyType]
    return `${acc}
■ ${item.title}（${item.required ? '必須' : '任意'}）
${item.value || '-'}
`
  }, '')

  return `------------------------------------
cofus.workからのお問い合わせ
------------------------------------
${inquiryValue}

※この内容をそのままコピー&ペーストして送信頂けます。`
}

export default GenInquiryValueToString
