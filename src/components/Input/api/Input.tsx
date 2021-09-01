import React from 'react'

export interface InputProps {
  /**
   * 允许清空
   */
  allowClear: boolean
  /**
   * 默认值
   */
  defaultValue?: string
  /**
   * 禁用状态
   */
  disabled: boolean
  /**
   * 输入框尺寸
   */
  size: 'large' | 'middle' | 'small'
  /**
   * 输入框值，受控
   */
  value?: string
  /**
   * 输入框值变化触发
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = () => null

Input.defaultProps = {
	allowClear: false,
	disabled: false,
	size: 'middle',
}

export default Input