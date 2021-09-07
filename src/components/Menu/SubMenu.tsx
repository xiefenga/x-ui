import PropTypes from 'prop-types'
import classNames from 'classnames'
import MenuContext from './MenuContext'
import { isMenuItemElement } from './MenuItem'
import React, { useContext, useState, useRef } from 'react'
import { PropsWithClassName, UnknowReactElement, UnkownFCElement } from '@/types/x-ui'

interface SubMenuBaseProps {
  title: string
  index?: string
  disabled?: boolean
}

export type SubMenuProps = PropsWithClassName<SubMenuBaseProps>

const OPEN = true, CLOSE = false

const SubMenu: React.FC<SubMenuProps> = (props) => {

	const {
		mode,
		subMenuOpenDelay,
		subMenuCloseDelay,
		defaultOpenSubMenus
	} = useContext(MenuContext)

	const {
		title,
		index = '',
		className,
		children,
		disabled = false
	} = props

	const [open, setOpen] = useState(defaultOpenSubMenus.includes(index))

	const timer = useRef<number | null>(null)

	const classes = classNames(
		'x-menu-subMenu',
		className,
		{ 'x-menu-subMenu-disabled': disabled },
		{ 'x-menu-subMenu-open': open }
	)

	const validateChildren = React.Children.map(children, (child, i) => {

		if (React.isValidElement(child)) {
			if (isMenuItemElement(child)) {
				const props = child.props
				return React.cloneElement(child, {
					index: `${index}-def_index-${i}`,
					...props
				})
			}
		}

		console.warn('Menu.SubMenu can only has Menu.Item children')
	})


	const handleMouse = (e: React.MouseEvent, toogle: boolean) => {
		e.preventDefault()
		window.clearTimeout(timer.current!)
		timer.current = window.setTimeout(
			() => setOpen(toogle),
			toogle === OPEN
				? subMenuOpenDelay * 1000
				: subMenuCloseDelay * 1000
		)
	}

	const hoverEvents = mode === 'horizontal' ? {
		onMouseEnter: (e: React.MouseEvent<HTMLLIElement>) => handleMouse(e, OPEN),
		onMouseLeave: (e: React.MouseEvent<HTMLLIElement>) => handleMouse(e, CLOSE)
	} : {}

	const clickEvent = mode === 'vertical' ? {
		onClick: (e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault()
			e.stopPropagation()
			setOpen(!open)
		}
	} : {}

	return (
		<li className={classes} {...hoverEvents}>
			<div className="title" {...clickEvent}>
				{title}
			</div>
			<ul className='x-menu-subMenu-wrapper'>
				{validateChildren}
			</ul>
		</li>
	)
}

SubMenu.displayName = 'x-Menu.SubMenu'

SubMenu.propTypes = {
	title: PropTypes.string.isRequired
}

type SubMenuElement = React.FunctionComponentElement<SubMenuProps>

export const isSubMenuElement = (val: UnknowReactElement): val is SubMenuElement => {
	return (val as UnkownFCElement).type.displayName === SubMenu.displayName
}

export default SubMenu
