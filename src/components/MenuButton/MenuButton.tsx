import { useStore } from '@nanostores/react'
import { siteState } from '@store/atoms/siteState'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useLockedBody } from 'usehooks-ts'

import styles from './MenuButton.module.scss'

const MenuButton = (): JSX.Element => {
  const $siteState = useStore(siteState)
  const { isOpenMenu } = $siteState

  // useLockedBodyを使って、body要素のスクロールを固定する
  const [, setLocked] = useLockedBody(false, 'root')

  // buttonのclickでsiteStateのisOpenMenuをtoggleする
  const handleClick = () => {
    siteState.set({
      ...$siteState,
      isOpenMenu: !$siteState.isOpenMenu
    })

    // isOpenMenuの値に応じて、body要素のスクロールを固定する
    setLocked(!isOpenMenu)
  }

  useEffect(() => {
    // isOpenMenuの値に応じて、html要素のdata属性を変更する
    document.documentElement.dataset.openMenu = isOpenMenu.toString()

    return () => {
      document.documentElement.dataset.openMenu = 'false'
    }
  }, [isOpenMenu])

  return (
    <>
      <button
        aria-label="メニューを開く"
        className={clsx(styles.button, 'u-mqw-down')}
        onClick={handleClick}
        title="メニューを開く"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  )
}

export default MenuButton
