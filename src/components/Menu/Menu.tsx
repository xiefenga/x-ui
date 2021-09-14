import React, { useState } from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from '../../types/x-ui'
import SubMenu, { isSubMenuElement } from './SubMenu'
import MenuItem, { isMenuItemElement } from './MenuItem'
import MenuContext, { MenuContextProps } from './MenuContext'

export type MenuMode = 'vertical' | 'horizontal'

interface MenuBaseProps {
	mode: MenuMode,
	selectedKeys: string[]
	openKeys: string[]
	defaultSelectedKeys: string[]
	defaultOpenKeys: string[]
	onSelect: (key: string) => void
	onOpenChange: (opeKeys: string[]) => void
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
		onSelect,
		onOpenChange,
		selectedKeys,
		openKeys,
		defaultSelectedKeys = [],
		defaultOpenKeys = [],
		subMenuCloseDelay = 0.1,
		subMenuOpenDelay = 0
	} = props

	const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>(defaultSelectedKeys)

	const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys)

	const classes = classNames(
		'x-menu',
		className,
		`x-menu-${mode}`
	)

	const internalOnSelect = (key: string) => {
		if (typeof selectedKeys === 'undefined') {
			setInternalSelectedKeys([key])
		}
		onSelect &&	onSelect(key)
	}

	const onInternalOpenChange = (key: string, toogle: boolean) => {
		const keys = toogle ? [key] : []
		onOpenChange && onOpenChange(keys)
		if (typeof openKeys === 'undefined') {
			setInternalOpenKeys(keys)
		}
	}

	const ctxVal: MenuContextProps = {
		mode,
		onInternalOpenChange,
		onSelect: internalOnSelect,
		openKeys: openKeys ?? internalOpenKeys,
		selectedKeys: selectedKeys ?? internalSelectedKeys,
		subMenuOpenDelay,
		subMenuCloseDelay
	}

	const validateChildren = React.Children.map(children, (child, i) => {

		if (React.isValidElement(child)) {
			if (isMenuItemElement(child) || isSubMenuElement(child)) {
				const props = child.props
				const key = child.key ?? `x-menu-item-${i}`
				return React.cloneElement(child, {
					...props,
					key,
					$index: key as string
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

