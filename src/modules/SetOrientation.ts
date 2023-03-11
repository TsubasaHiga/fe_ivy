import GetOrientation from '@utils/getOrientation'

const SetOrientation = () => (document.documentElement.dataset.orientation = GetOrientation())

export default SetOrientation
