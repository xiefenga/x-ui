import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'
import TabPane, { isTabPaneElement } from './TabPane'
import React, { ReactNode, useEffect, useState } from 'react'

interface TabBaseProps {
  activeKey?: string
  defaultActiveKey?: string
	onChange: (key: string) => void
  onTabClick?: (key: string, e: React.MouseEvent<HTMLDivElement>) => void
}

export type TabProps = PropsWithClassName<TabBaseProps>

interface TabComponent<P> extends React.FC<P> {
  TabPane: typeof TabPane
}

const testId = process.env.NODE_ENV === 'test' ? { 'data-testid': 'x-tab' } : {}

const Tab: TabComponent<TabProps> = (props) => {

	const {
		className,
		children,
		activeKey,
		defaultActiveKey,
		onTabClick,
		onChange
	} = props

	const [active, setActive] = useState<string>(activeKey ?? '')

	// 默认选中第一个 tab
	useEffect(() => {
		if (activeKey === undefined) {
			setActive(defaultActiveKey ?? tabs[0]?.key ?? '')
		}
	}, [])

	// 受控
	useEffect(() => {
		if (activeKey !== undefined) {
			setActive(activeKey)
		}
	}, [activeKey])

	const classes = classNames(
		'x-tab',
		className
	)

	const tabs: { val: ReactNode, key:string, disabled: boolean }[] = []

	const tabItemContent: { val: ReactNode, key: string }[] = []
  
	React.Children.forEach(children, (child, index) => {
		if (React.isValidElement(child) && isTabPaneElement(child)) {
			const props = child.props
			const key = child.key as string ?? `${props.tab}-${index}`
			tabs.push({ val: props.tab, key, disabled: props.disabled ?? false})
			tabItemContent.push({ val: props.children, key })
		} else {
			console.warn('Tab children can only be TabPane')
		}
	})
  
	return (
		<div className={classes} {...testId}>
			<div className="x-tab__nav">
				{tabs.map(tab => {
					const tabClass = classNames(
						'x-tab__item',
						{ 'x-tab__item--active': tab.key === active },
						{ 'x-tab__item--disabled': tab.disabled }
					)

					const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
						if (!tab.disabled) {
							if (activeKey === undefined) {
								setActive(tab.key)
							}
							onChange && onChange(tab.key)
							onTabClick && onTabClick(tab.key, e)
						}
					}
					return (
						<div
							onClick={onClick}
							className={tabClass} 
							key={tab.key}
						>
							{tab.val}
						</div>
					)
				})}
			</div>
			<div className="x-tab__content">
				{tabItemContent.map(item => {
					const tabPaneClass = classNames(
						'x-tab__tabpane',
						{'x-tab__tabpane--hide' : item.key !== active}
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
