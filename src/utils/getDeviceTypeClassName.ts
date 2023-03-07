import type { DeviceType } from '@type/DeviceType'

type GetDeviceTypeClassNameReturnType = 'u-mqw-up' | 'u-mqw-down' | ''

const GetDeviceTypeClassName = (deviceType: DeviceType | undefined): GetDeviceTypeClassNameReturnType => {
  return deviceType === 'lg' ? 'u-mqw-up' : deviceType === 'sm' ? 'u-mqw-down' : ''
}

export default GetDeviceTypeClassName
