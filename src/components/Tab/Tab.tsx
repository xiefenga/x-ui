import classNames from 'classnames'
import { PropsWithClassName } from '../../types/x-ui'
import TabPane, { isTabPaneElement } from './TabPane'
import React, { ReactNode, useEffect, useState, useRef } from 'react'

type TabType = 'line' | 'card'

interface TabBaseProps {
	type?: TabType
  activeKey?: string
  defaultActiveKey?: string
	onChange?: (key: string) => void
  onTabClick?: (key: string, e: React.MouseEvent<HTMLDivElement>) => void
}

export type TabProps = PropsWithClassName<TabBaseProps>

interface TabComponent<P> extends React.FC<P> {
  TabPane: typeof TabPane
}

const Tab: TabComponent<TabProps> = (props) => {

	const {
		type = 'line',
		className,
		children,
		activeKey,
		defaultActiveKey,
		onTabClick,
		onChange
	} = props

	const navRef = useRef<HTMLDivElement>(null)

	const barRef = useRef<HTMLDivElement>(null)	

	const classes = classNames(
		'x-tab',
		className,
		`x-tab--${type}`
	)

	const tabs: { val: ReactNode, key:string, disabled: boolean }[] = []

	const tabItemContent: { val: ReactNode, key: string }[] = []
  
	React.Children.forEach(children, (child, index) => {
		if (React.isValidElement(child) && isTabPaneElement(child)) {
			const props = child.props
			if(typeof props.tab === 'undefined') {
				console.warn('TabPane must give tab prop')
				return
			}
			const key = child.key as string ?? `x-tab-${props.tab}-${index}`
			tabs.push({ val: props.tab, key, disabled: props.disabled ?? false})
			tabItemContent.push({ val: props.children, key })
		} else {
			console.warn('Tab children can only be TabPane')
		}
	})

	const [internalActive, setInternalActive] = useState<string>(defaultActiveKey ?? tabs[0]?.key ?? '')

	useEffect(() => {
		if (type === 'line' && navRef.current && barRef.current) {
			const acitveDOM =	navRef.current.getElementsByClassName('x-tab__item--active')[0] as HTMLDivElement
			if (acitveDOM) {
				barRef.current.style.width = acitveDOM.offsetWidth + 'px'
				barRef.current.style.left =  acitveDOM.offsetLeft + 'px'
			}
		}
	}, [internalActive, activeKey])
  
	return (
		<div className={classes}>
			<div className="x-tab__nav" ref={navRef}>
				{tabs.map(tab => {
					const tabClass = classNames(
						'x-tab__item',
						// 得 tm 加括号，?? 优先级的问题
						{ 'x-tab__item--active': tab.key === (activeKey ?? internalActive) },
						{ 'x-tab__item--disabled': tab.disabled }
					)
					const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
						if (!tab.disabled) {
							// 非受控使用内部的 state
							if (typeof activeKey === 'undefined') {
								setInternalActive(tab.key)
							}
							onChange && onChange(tab.key)
							onTabClick && onTabClick(tab.key, e)
						}
					}
					return (
						<div onClick={onClick} className={tabClass} key={tab.key}>
							{tab.val}
						</div>
					)
				})}
				{ type === 'line' && <div className="x-tab__bar" ref={barRef} /> }	
			</div>
			<div className="x-tab__content">
				{tabItemContent.map(item => {
					const tabPaneClass = classNames(
						'x-tab__tabpane',
						{'x-tab__tabpane--hide' : item.key !== (activeKey ?? internalActive)}
					)
					return (
						<div className={tabPaneClass} key={item.key}>
							{item.val}
						</div>
					)
				})}
			</div>
		</div>
	)
}

Tab.TabPane = TabPane

export default Tab
