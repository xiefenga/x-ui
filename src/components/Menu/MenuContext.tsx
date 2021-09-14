import { MenuMode } from './Menu'
import { createContext } from 'react'

export interface MenuContextProps {
  selectedKeys: string[]
  subMenuCloseDelay: number
  subMenuOpenDelay: number
  mode: MenuMode
  onSelect?: (key: string) => void
  onInternalOpenChange: (key: string, toogle: boolean) => void
  openKeys: string[]
}

const MenuContext = createContext<MenuContextProps>({
	openKeys: [],
	selectedKeys: [],
	subMenuCloseDelay: 0,
	subMenuOpenDelay: 0,
	mode: 'horizontal',
	onInternalOpenChange: () => {}
})

MenuContext.displayName = 'x-Menu.Context'

export default MenuContext