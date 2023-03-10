import type { DeviceType } from '@type/DeviceType'
import GetDeviceType from '@utils/getDeviceType'
import { useEffect, useState } from 'react'

// ウインドウサイズが変化した際にGetDeviceTypeを実行し、値に変化がある時だけstateを更新する
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('lg')

  useEffect(() => {
    setDeviceType(GetDeviceType())

    const handleResize = () => {
      setDeviceType(GetDeviceType())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceType
}

export default useDeviceType
