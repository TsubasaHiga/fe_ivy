/**
 * 要素の横スクロール位置を中心向きにセットします
 */
const SetScrollPositionToCenter = (
  rootElement: HTMLElement,
  targetElement: HTMLElement,
  behavior: 'auto' | 'smooth' = 'smooth',
  adjustDistance: number = 2
): void => {
  const rootHalfW = rootElement.getBoundingClientRect().width / 2
  const btnHalfW = targetElement.getBoundingClientRect().width / adjustDistance
  const currentPosLeft = targetElement.offsetLeft + btnHalfW
  const posLeft = currentPosLeft - rootHalfW

  // console.log(behavior)

  rootElement.scrollTo({ left: posLeft, behavior: behavior })
}

export default SetScrollPositionToCenter
