import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface AlertProps {
  /**
   * 提示消息
   */
  message: string
  /**
   * icon名称或组件
   */
  icon?: IconProp
  /**
   * 是否可关闭
   */
  closeable?: boolean
  /**
   * 关闭触发事件
   */
  onClose?: (e: React.MouseEvent<SVGSVGElement>) => void
}

const Alert: React.FC<AlertProps> = () => null

Alert.defaultProps = {
	closeable: false
}

export default Alert