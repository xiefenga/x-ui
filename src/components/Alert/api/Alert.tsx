import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface AlertProps {
  /**
   * 提示消息
   */
  message: string
  /**
   * 提示的样式
   */
  type?: 'success' | 'info' | 'warning' | 'error'
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
  onClose?: (e: MouseEvent) => void
}

const Alert: React.FC<AlertProps> = () => null

Alert.defaultProps = {
	closeable: false,
	type: 'warning'
}

export default Alert