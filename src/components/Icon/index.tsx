import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './style/index.scss'

// 注册图标
library.add(fas)

export { default } from './Icon'

export type { IconProps } from './Icon'
