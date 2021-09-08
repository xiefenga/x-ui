import React from 'react'
import { withTestId } from '../../../utils/test'
import BaseSwitch, { SwitchProps } from '../Switch'
import { render, screen, fireEvent } from '@testing-library/react'

const Switch = withTestId(BaseSwitch)

const testId = Switch.testId

const baseSwitchTestAction = (props: SwitchProps = {}) => {
	render(<Switch {...props} />)
	return screen.getByTestId(testId).querySelector('.x-switch') as HTMLButtonElement
}

describe('Switch component test', () => {
	it('should render correctly', () => {
		const element = baseSwitchTestAction()
		expect(element).toBeInTheDocument()
		fireEvent.click(element)
		expect(element).toHaveClass('x-switch--checked')
	})

	it('should can receive default checked state ', () => {
		const element = baseSwitchTestAction({ defaultChecked: true })
		expect(element).toHaveClass('x-switch--checked')
		fireEvent.click(element)
		expect(element).not.toHaveClass('x-switch--checked')
	})

	it('should have controlled state', () => {
		const element = baseSwitchTestAction({ checked: true })
		expect(element).toHaveClass('x-switch--checked')
		fireEvent.click(element)
		expect(element).toHaveClass('x-switch--checked')
	})

	it('should can tigger event when click', () => {
		const onClick = jest.fn()
		const onChange = jest.fn()
		const element = baseSwitchTestAction({ onChange, onClick })
		fireEvent.click(element)
		expect(onClick).toHaveBeenCalled()
		expect(onChange).toHaveBeenCalled()
		expect(onChange.mock.calls[0][0]).toBe(true)
	})

	it('should have disabled state', () => {
		const onClick = jest.fn()
		const onChange = jest.fn()
		const element = baseSwitchTestAction({ disabled: true, onClick, onChange })
		expect(element).toHaveClass('x-switch--disabled')
		fireEvent.click(element)
		expect(element).not.toHaveClass('x-switch--checked')
		expect(onClick).not.toHaveBeenCalled()
		expect(onChange).not.toHaveBeenCalled()
	})

	it('should have different size', () => {
		const element = baseSwitchTestAction({ size: 'small' })
		expect(element).toHaveClass('x-switch--sm')
	})

})