interface MenuItemProps {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 唯一标志
   */
  key?: string
}

const MenuItem: React.FC<MenuItemProps> = () => null

MenuItem.defaultProps = {
	disabled: false
}

export default MenuItem