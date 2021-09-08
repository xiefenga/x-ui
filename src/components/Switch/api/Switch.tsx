export interface SwitchProps {
  /**
   * 开关是否选中，受控
   */
	checked?: boolean
  /**
   * 默认选中状态
   */
	defaultChecked?: boolean
  /**
   * 是否禁用
   */
	disabled?: boolean
  /**
   * 不同大小
   */
	size?: 'default' | 'small'
  /**
   * 开关状态变化时触发
   */
	onChange?: (checked: boolean) => void
  /**
   * 点击时触发
   */
	onClick?: (e: MouseEvent) => void
}

const Switch: React.FC<SwitchProps> = () => null

Switch.defaultProps = {
	defaultChecked: false,
	disabled: false,
	size: 'default'
}

export default Switch