import styles from './ArticleBody.module.scss'

type Props = {
  content: string
}

const ArticleBody = ({ content }: Props): JSX.Element => {
  // console.log(content)
  return (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{
        __html: `${content}`
      }}
    />
  )
}

export default ArticleBody
