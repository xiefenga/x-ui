import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'
import SubMenu, { isSubMenuElement } from './SubMenu'
import MenuItem, { isMenuItemElement } from './MenuItem'
import MenuContext, { MenuContextProps } from './MenuContext'

export type MenuMode = 'vertical' | 'horizontal'

interface MenuBaseProps {
  mode: MenuMode,
  selectedIndex: string
  defaultOpenSubMenus: string[]
  onSelect: (index: string) => void
  subMenuCloseDelay: number
  subMenuOpenDelay: number
}

export type MenuProps = PropsWithClassName<Partial<MenuBaseProps>>

interface MenuComponent<P> extends React.FC<P> {
  Item: typeof MenuItem
  SubMenu: typeof SubMenu
}

const Menu: MenuComponent<MenuProps> = props => {

	const {
		className,
		children,
		mode = 'horizontal',
		selectedIndex = '',
		onSelect,
		defaultOpenSubMenus = [],
		subMenuCloseDelay = 0.1,
		subMenuOpenDelay = 0
	} = props

	const classes = classNames(
		'x-menu',
		className,
		`x-menu-${mode}`
	)

	const ctxVal: MenuContextProps = {
		mode,
		onSelect,
		selectedIndex,
		subMenuOpenDelay,
		subMenuCloseDelay,
		defaultOpenSubMenus,

	}

	const validateChildren = React.Children.map(children, (child, i) => {

		if (React.isValidElement(child)) {
			if (isMenuItemElement(child) || isSubMenuElement(child)) {
				const props = child.props
				return React.cloneElement(child, {
					index: `def_index-${i}`,
					...props
				})
			}
		}

		console.warn('Menu can only has Menu.Item or Menu.SubMenu children')
	})

	return (
		<MenuContext.Provider value={ctxVal}>
			<ul className={classes}>
				{validateChildren}
			</ul>
		</MenuContext.Provider>
	)
}

Menu.Item = MenuItem

Menu.SubMenu = SubMenu

Menu.displayName = 'x-Menu'

export default Menu

