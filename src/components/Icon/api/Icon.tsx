import React from 'react'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
export interface IconProps {
  /**
   * 图标，和 FontAwesomeIcon 相同，除了 light 图标
   */
  icon: FontAwesomeIconProps
  /**
   * 主题色
   */
  theme?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
  /**
   * 图标尺寸，FontAwesomeIcon 的 size 属性
   */
  size?: 'xs' | 'lg' | 'sm' | '1x - 10x'
  /**
   * 图标是否旋转
   */
  spin?: boolean
  /**
   * 图标是否 rotate with eight steps
   */
  pulse?: boolean
}

const Icon: React.FC<IconProps> = () => null

export default Icon