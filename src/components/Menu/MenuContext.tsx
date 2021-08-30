import { MenuMode } from './Menu'
import { createContext } from 'react'

export interface MenuContextProps {
  selectedIndex: string
  subMenuCloseDelay: number
  subMenuOpenDelay: number
  mode: MenuMode
  onSelect?: (index: string) => void
  defaultOpenSubMenus: string[]
}

const MenuContext = createContext<MenuContextProps>({
	selectedIndex: '',
	subMenuCloseDelay: 0,
	subMenuOpenDelay: 0,
	mode: 'horizontal',
	defaultOpenSubMenus: []
})

MenuContext.displayName = 'x-Menu.Context'

export default MenuContext