import { values } from '@const/values'
import type { DeviceType } from '@type/DeviceType'

/**
 * breakpointとウインドウサイズを比較してlgかsmか取得します
 * @return string 'lg' or 'sm'
 */
const GetDeviceType = (): DeviceType => (window.innerWidth > values.BREAKPOINT ? 'lg' : 'sm')

export default GetDeviceType
