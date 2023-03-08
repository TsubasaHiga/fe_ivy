import InquiryCopyButton from '@components/InquiryCopyButton/InquiryCopyButton'
import InquiryItem from '@components/InquiryItem/InquiryItem'
import InquirySendArea from '@components/InquirySendArea/InquirySendArea'
import InquirySendLink from '@components/InquirySendLink/InquirySendLink'
import Section from '@components/Section/Section'
import Select from '@components/UI/Select/Select'
import TextArea from '@components/UI/TextArea/TextArea'
import TextInput from '@components/UI/TextInput/TextInput'
import { links, snsLinks } from '@const/values'
import Spacer from '@layouts/Spacer/Spacer'
import GenInquiryValueToString from '@modules/GenInquiryValueToString'
import type { InquiryKeyType, InquiryType } from '@type/InquiryType'
import { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

import styles from './Inquiry.module.scss'

const Inquiry = () => {
  // inquiryの中で必須項目が入力されているかの状態を管理
  const [isRequiredFilled, setIsRequiredFilled] = useState(false)

  // 入力内容を管理
  const [inquiry, setInquiry] = useState<InquiryType>({
    name: {
      title: 'お名前',
      required: true,
      value: ''
    },
    company: {
      title: '会社名・組織名',
      required: false,
      value: ''
    },
    type: {
      title: 'お問い合わせの種類',
      required: true,
      value: ''
    },
    content: {
      title: '内容',
      required: true,
      value: ''
    }
  })

  // クリップボードにコピーした状態を管理
  const [, setClipBoardValue] = useCopyToClipboard()

  // 入力内容を更新
  const changeHandler = (key: InquiryKeyType, value: string) => {
    setInquiry((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        value
      }
    }))
  }

  // inquiryの中で必須項目が入力されているかを判定
  useEffect(() => {
    const isFilled = Object.keys(inquiry).every((key) => {
      const item = inquiry[key as InquiryKeyType]
      return !item.required || item.value !== ''
    })
    setIsRequiredFilled(isFilled)
  }, [inquiry])

  return (
    <Section id="inquiry">
      <div className={styles.inquiry}>
        <Spacer>
          <div className={styles.inner}>
            <div className={styles.head}>
              <h2 className={styles.title}>
                <span>お問い合わせ</span>
              </h2>
              <p className={styles.text}>
                内容を入力の上各種チャットツール、またはSNSアカウントまで直接お問い合わせ下さい。以下を
                <span>コピペ＆送信</span>頂くだけで大丈夫です👍
              </p>
            </div>

            <div className={styles.main}>
              <div className={styles.list}>
                <InquiryItem name="お名前" required>
                  <TextInput
                    addClassName={styles.input}
                    onChange={(e) => changeHandler('name', e.target.value)}
                    placeholder="田中太郎"
                  />
                </InquiryItem>
                <InquiryItem name="会社名・組織名">
                  <TextInput
                    addClassName={styles.input}
                    onChange={(e) => changeHandler('company', e.target.value)}
                    placeholder="○○株式会社"
                  />
                </InquiryItem>
                <InquiryItem name="種類" required>
                  <Select
                    addClassName={styles.select}
                    onChange={(e) => changeHandler('type', e.target.value)}
                    options={['お仕事の依頼', 'お問い合わせ', 'その他']}
                  />
                </InquiryItem>
                <InquiryItem name="お問い合わせ内容" required>
                  <TextArea
                    onChange={(e) => changeHandler('content', e.target.value)}
                    placeholder="お問い合わせ内容を入力してください"
                  />
                </InquiryItem>
              </div>

              <div className={styles.footer}>
                <InquiryCopyButton
                  disabled={!isRequiredFilled}
                  onClick={() => setClipBoardValue(GenInquiryValueToString(inquiry))}
                />
                <InquirySendArea disabled={!isRequiredFilled}>
                  <InquirySendLink disabled={!isRequiredFilled} link={links.CHATWORK} text="Chatwork" />
                  <InquirySendLink disabled={!isRequiredFilled} link={links.SLACK} text="Slack" />
                  <InquirySendLink disabled={!isRequiredFilled} link={snsLinks.TWITTER} text="Twitter" />
                </InquirySendArea>
              </div>
            </div>
          </div>
        </Spacer>
      </div>
    </Section>
  )
}

export default Inquiry
