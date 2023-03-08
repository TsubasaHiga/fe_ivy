import { atom } from 'nanostores'

type SiteStateType = {
  isOpenMenu: boolean
}
export const siteState = atom<SiteStateType>({
  // メニューが開かれているかどうか
  isOpenMenu: false
})

// update
export const updateSiteState = (data: SiteStateType) => {
  const siteStateData = siteState.get()
  siteState.set({
    ...siteStateData,
    ...data
  })
}
