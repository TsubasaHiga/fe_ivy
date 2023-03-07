import styles from './Article.module.scss'

type Props = {
  content: string
}

const Article = ({ content }: Props): JSX.Element => {
  return (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{
        __html: `${content}`
      }}
    />
  )
}

export default Article
