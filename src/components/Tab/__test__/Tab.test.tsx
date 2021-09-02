import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tab from '../Tab'

const { TabPane }  = Tab


describe('Tab component test', () => {
	it('should default active the first tab', () => {
		render(
			<Tab>
				<TabPane tab="tab 1">tab 1</TabPane>
				<TabPane tab="tab 2">tab 2</TabPane>
				<TabPane tab="tab 3">tab 3</TabPane>
				<TabPane tab="tab 4">tab 4</TabPane>
				<TabPane tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		expect(items[0]).toHaveClass('x-tab__item--active')
	})

	it('should default active the defaultActiveKey tab', () => {
		render(
			<Tab defaultActiveKey="tab 2">
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--active')
	})

	it('should change active tab through click', () => {
		render(
			<Tab>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		expect(items[0]).toHaveClass('x-tab__item--active')
		fireEvent.click(items[2])
		expect(items[2]).toHaveClass('x-tab__item--active')
	})

	it('should active decided by activeKey', () => {
		render(
			<Tab activeKey="tab 2">
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--active')
		fireEvent.click(items[2])
		expect(items[2]).not.toHaveClass('x-tab__item--active')
	})

	it('should firEvent change when click tab', () => {
		const prop = { onChange: jest.fn() }
		render(
			<Tab {...prop}>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		fireEvent.click(items[2])
		expect(prop.onChange).toHaveBeenCalled()
	})

	it('should render disabled tab when giv disabled prop', () => {
		const prop = { onChange: jest.fn() }
		render(
			<Tab {...prop}>
				<TabPane key="tab 1" tab="tab 1">tab 1</TabPane>
				<TabPane key="tab 2" disabled tab="tab 2">tab 2</TabPane>
				<TabPane key="tab 3" tab="tab 3">tab 3</TabPane>
				<TabPane key="tab 4" tab="tab 4">tab 4</TabPane>
				<TabPane key="tab 5" tab="tab 5">tab 5</TabPane>
			</Tab>
		)
		const element = screen.getByTestId('x-tab')
		const items =element.getElementsByClassName('x-tab__item')
		expect(items[1]).toHaveClass('x-tab__item--disabled')
		fireEvent.click(items[1])
		expect(prop.onChange).not.toHaveBeenCalled()
	})

})