export type InquiryKeyType = 'name' | 'company' | 'type' | 'content'
export type InquiryType = {
  [key in InquiryKeyType]: {
    title: string
    required: boolean
    value: string
  }
}
