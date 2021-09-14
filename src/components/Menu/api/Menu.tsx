interface MenuProps {
  /**
   * 菜单类型，支持垂直、水平两种类型
   */
	mode: 'vertical' | 'horizontal',
  /**
   * 当前选中的菜单项 key 数组
   */
	selectedKeys: string[]
  /**
   * 当前展开的 SubMenu 菜单项 key 数组
   */
	openKeys: string[]
  /**
   * 初始选中的菜单项 key 数组
   */
	defaultSelectedKeys: string[]
  /**
   * 初始展开的 SubMenu 菜单项 key 数组
   */
	defaultOpenKeys: string[]
  /**
   * 被选中时调用
   */
	onSelect: (key: string) => void
  /**
   * SubMenu 展开/关闭时调用
   */
	onOpenChange: (opeKeys: string[]) => void
  /**
   * 用户鼠标离开子菜单后关闭延时，单位：秒
   */
	subMenuCloseDelay: number
  /**
   * 用户鼠标进入子菜单后开启延时，单位：秒
   */
	subMenuOpenDelay: number
}

const Menu: React.FC<Partial<MenuProps>> = () => null

Menu.defaultProps = {
	mode: 'horizontal',
	defaultOpenKeys: [],
	defaultSelectedKeys: [],
	subMenuCloseDelay: 0.1,
	subMenuOpenDelay: 0
}

export default Menu