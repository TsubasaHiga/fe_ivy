import clsx from 'clsx'

import styles from './Button.module.scss'

type Props = {
  text: string
  onClick: () => void
  className?: string
  active?: boolean
  variant?: 'filled' | 'outlined'
  radius?: 'radius-full' | 'radius-small'
}

const Button = ({
  text,
  onClick,
  className,
  active,
  variant = 'filled',
  radius = 'radius-full'
}: Props): JSX.Element => {
  return (
    <button
      aria-label={text}
      className={clsx(styles.button, className, styles[variant], styles[radius])}
      data-active={active}
      onClick={onClick}
      title={text}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
