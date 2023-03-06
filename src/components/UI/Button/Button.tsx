import clsx from 'clsx'

import styles from './Button.module.scss'

type Props = {
  text: string
  onClick: () => void
  className?: string
  active?: boolean
}

const Button = ({ text, onClick, className, active }: Props): JSX.Element => {
  return (
    <button
      aria-label={text}
      className={clsx(styles.button, className)}
      data-active={active}
      onClick={onClick}
      title={text}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
