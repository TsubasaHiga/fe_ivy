import AddUaData from '@modules/AddUaData'
import SetOrientation from '@modules/SetOrientation'
import Set100vh from '@utils/set100vh'
import { memo, useEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'

// ページロード時の処理
const initPageLoad = () => {
  console.log('onDOMContentLoaded')
  // AddUaData
  new AddUaData()

  // Set100vh
  Set100vh()
  Set100vh('--vh-always')

  // SetOrientation
  SetOrientation()

  // add class is-loaded
  document.documentElement.classList.add('is-loaded')
}

const CommonScript = () => {
  const { height } = useWindowSize()

  // 共通の処理を実行
  useEffect(() => {
    // ページロード時の処理
    initPageLoad()
  }, [])

  // heightが変化した際の処理を実行
  useEffect(() => {
    // Set100vh更新
    Set100vh()

    // SetOrientationの更新
    SetOrientation()
  }, [height])

  return null
}

export default memo(CommonScript)
