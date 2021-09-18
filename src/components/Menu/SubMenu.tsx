import classNames from 'classnames'
import MenuContext from './MenuContext'
import React, { useContext, useRef } from 'react'
import { Transition } from 'react-transition-group'
import { isMenuItemElement, MenuItemProps } from './MenuItem'
import { PropsWithClassName, UnknowReactElement, UnkownFCElement } from '@/types/x-ui'

interface SubMenuBaseProps {
  title: string
  $index?: string
  disabled?: boolean
}

export type SubMenuProps = PropsWithClassName<SubMenuBaseProps>

const OPEN = true, CLOSE = false

const SubMenu: React.FC<SubMenuProps> = (props) => {

	const {
		mode,
		subMenuOpenDelay,
		subMenuCloseDelay,
		openKeys,
		onInternalOpenChange
	} = useContext(MenuContext)

	const {
		title,
		$index = '',
		className,
		children,
		disabled = false
	} = props

	const open = openKeys.includes($index)

	const timer = useRef<number>(null) as { current: number | null }

	const ulHeight = useRef<HTMLUListElement>(null) as { current: number | null }

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
				const key = child.key ?? `x-submenu-item-${i}`
				return React.cloneElement(child, {
					...props,
					key,
					$index: key as string,
				})
			}
		}
		console.warn('Menu.SubMenu can only has Menu.Item children')
	}) as React.FunctionComponentElement<MenuItemProps>[]

	const handleMouse = (e: React.MouseEvent, toogle: boolean) => {
		e.preventDefault()
		window.clearTimeout(timer.current ?? undefined)
		timer.current = window.setTimeout(
			() => onInternalOpenChange($index, toogle),
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
			onInternalOpenChange($index, !open)
		}
	} : {}

	const onEnter = (node: HTMLElement) => {
		node.style.position = 'absolute'
		node.style.visibility = 'hidden'
		ulHeight.current = node.offsetHeight
		node.style.position = ''
		node.style.visibility = ''
		node.style.height = '0px'
		node.style.height = '0px'
		// 强行重新渲染
		node.offsetHeight
	}

	const onEntering = (node: HTMLElement) => {
		node.style.height = ulHeight.current! + 'px'
	}

	const onEntered = (node: HTMLElement) => {
		node.style.height = ''
	}

	const onExit = (node: HTMLElement) => {
		node.style.display = 'block'
		ulHeight.current = node.offsetHeight
		node.style.height = ulHeight.current! + 'px'
		// 强行重新渲染
		node.offsetHeight
	}

	const onExiting = (node: HTMLElement) => {
		node.style.height = '0px'
	}

	const onExited = (node: HTMLElement) => {
		node.style.height = ''
		node.style.display = ''
	}

	return (
		<li className={classes} {...hoverEvents}>
			<div className="title" {...clickEvent}>
				{title}
			</div>
			<Transition 
				in={open} 
				timeout={300} 
				onEnter={onEnter} 
				onEntering={onEntering} 
				onEntered={onEntered}
				onExit={onExit}
				onExiting={onExiting}
				onExited={onExited}
			>
				<ul className='x-menu-subMenu-wrapper'>
					{validateChildren}
				</ul>
			</Transition>
		</li>
	)
}

SubMenu.displayName = 'x-Menu.SubMenu'

type SubMenuElement = React.FunctionComponentElement<SubMenuProps>

export const isSubMenuElement = (val: UnknowReactElement): val is SubMenuElement => {
	return (val as UnkownFCElement).type.displayName === SubMenu.displayName
}

export default SubMenu
