interface SubMenuProps {
  /**
   * 子菜单项值
   */
  title: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 唯一标志
   */
  key?: string
}

const SubMenu: React.FC<SubMenuProps> = () => null

SubMenu.defaultProps = {
	disabled: false
}

export default SubMenu