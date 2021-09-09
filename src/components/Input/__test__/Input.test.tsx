import React from 'react'
import BaseInput, { InputProps } from '../Input'
import { withTestId } from '../../../utils/test'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'

const Input = withTestId(BaseInput)

const testId = Input.testId

const baseInputTestAction = (props: InputProps = {}) => {
	render(<Input {...props} />)
	return screen.getByTestId(testId).querySelector('.x-input') as HTMLDivElement
}


describe('Input component test', () => {
	it('should render correctly', () => {
		const element = baseInputTestAction()
		expect(element).toBeInTheDocument()
	})

	it('should have defaultValue', () => {
		const defaultValue = 'defaultValue'
		const element = baseInputTestAction({ defaultValue })
		const input = element.querySelector('input') as HTMLInputElement
		expect(input.value).toBe(defaultValue)
		input.value = 'aaaa'
		expect(input.value).toBe('aaaa')
	})

	it('should have different size', () => {
		expect(baseInputTestAction({ size: 'small' })).toHaveClass('x-input--sm')
		cleanup()
		expect(baseInputTestAction({ size: 'large' })).toHaveClass('x-input--lg')
	})

	it('can clear input value', () => {
		const element = baseInputTestAction({ allowClear: true, defaultValue: 'aaaa' })
		expect(element).toHaveClass('x-input--clearable')
		const input = element.querySelector('input') as HTMLInputElement
		const clear = element.querySelector('.x-input__clear')
		expect(clear).toBeInTheDocument()
		fireEvent.click(clear)
		expect(input.value).toBe('')
	})

	it('should have controlled state', () => {
		const onChange = jest.fn()
		const element = baseInputTestAction({ value: 'value', onChange })
		const input = element.querySelector('input') as HTMLInputElement
		expect(input.value).toBe('value')
		fireEvent.change(input, { target: { value: 'aaa' } })
		expect(input.value).toBe('value')
		expect(onChange).toHaveBeenCalled()
	})

	it('should have disabled state', () => {
		const onChange = jest.fn()
		const element = baseInputTestAction({ disabled: true, onChange })
		const input = element.querySelector('input') as HTMLInputElement
		fireEvent.change(input, { target: { value: 'aaa' } })
		expect(onChange).not.toHaveBeenCalled()
	})

})