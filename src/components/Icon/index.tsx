import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './style/index.scss'

/** 
 * fal - light
 * fas - solid
 * fab - brand
 * far - regular
*/
// 注册图标 
library.add(fas, fab, far)

export { default } from './Icon'

export type { IconProps } from './Icon'
