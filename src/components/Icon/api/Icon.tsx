import React from 'react'

export interface IconProps {
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