import React from 'react'
import BaseTab from '../Tab'
import { withTestId } from '../../../utils/test'
import { fireEvent, render, screen } from '@testing-library/react'

const Tab = withTestId(BaseTab)

const { testId } = Tab

const { TabPane } = BaseTab

const baseTabTestAction = (component: React.ReactElement) => {
	render(component)
	return screen.getByTestId(testId).querySelector('.x-tab') as HTMLDivElement
}

describe('Tab component test', () => {
	it('should default active the first tab', () => {
		const element=	baseTabTestAction(
			<Tab>
				<TabPane tab="tab 1">tab 1</TabPane>
				<TabPane tab="tab 2">tab 2</TabPane>
				<TabPane tab="tab 3">tab 3</TabPane>
				<TabPane tab="tab 4">tab 4</TabPane>
				<TabPane tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		expect(items[0]).toHaveClass('x-tab__item--active')
	})

	it('should default active the defaultActiveKey tab', () => {
		const element=	baseTabTestAction(
			<Tab defaultActiveKey="tab 2">
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--active')
	})

	it('should change active tab through click', () => {
		const element=	baseTabTestAction(
			<Tab>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		expect(items[0]).toHaveClass('x-tab__item--active')
		fireEvent.click(items[2])
		expect(items[2]).toHaveClass('x-tab__item--active')
	})

	it('should active decided by activeKey', () => {
		const element=	baseTabTestAction(
			<Tab activeKey="tab 2">
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--active')
		fireEvent.click(items[2])
		expect(items[2]).not.toHaveClass('x-tab__item--active')
	})

	it('should firEvent change when click tab', () => {
		const prop = { onChange: jest.fn() }
		const element=	baseTabTestAction(
			<Tab {...prop}>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		fireEvent.click(items[2])
		expect(prop.onChange).toHaveBeenCalled()
	})

	it('should render disabled tab when giv disabled prop', () => {
		const prop = { onChange: jest.fn() }
		const element=	baseTabTestAction(
			<Tab {...prop}>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" disabled tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const items = element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--disabled')
		fireEvent.click(items[1])
		expect(prop.onChange).not.toHaveBeenCalled()
	})
	
	it('should have different type', () => {
		const element =	baseTabTestAction(
			<Tab type="card">
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" disabled tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		expect(element).toHaveClass('x-tab--card')
	})
})