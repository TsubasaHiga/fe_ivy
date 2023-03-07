import type { DeviceType } from '@type/DeviceType'

export type MenuItemType = {
  title: string
  displayDeviceType?: DeviceType
  link: string
  isBlank?: boolean
  icon?: React.ReactNode
}

export type MenuListType = {
  title: string
  displayDeviceType?: DeviceType
  list: MenuItemType[]
}
