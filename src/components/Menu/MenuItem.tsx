import classNames from 'classnames'
import MenuContext from './MenuContext'
import React, { useContext } from 'react'
import { PropsWithClassName, UnknowReactElement, UnkownFCElement } from '@/types/x-ui'

interface MenuItemBaseProps {
  $index: string
  disabled: boolean
}

export type MenuItemProps = PropsWithClassName<Partial<MenuItemBaseProps>>

const MenuItem: React.FC<MenuItemProps> = props => {

	const {
		selectedKeys,
		onSelect
	} = useContext(MenuContext)

	const {
		$index = '',
		disabled = false,
		className,
		children
	} = props

	const classes = classNames(
		'x-menu-item',
		className,
		{ 'x-menu-item-disabled': disabled },
		{ 'x-menu-item-selected': selectedKeys.includes($index) }
	)

	const onClick = () => {
		if (!disabled && onSelect) {
			onSelect($index)
		}
	}

	return (
		<li className={classes} onClick={onClick}>
			{children}
		</li>
	)
}

MenuItem.displayName = 'x-Menu.Item'

type MenuItemElement = React.FunctionComponentElement<MenuItemProps>

export const isMenuItemElement = (val: UnknowReactElement): val is MenuItemElement => {
	return (val as UnkownFCElement).type.displayName === MenuItem.displayName
}

export default MenuItem
