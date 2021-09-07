import React from 'react'
import Alert from '../Alert'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Alert component test', () => {
	it('should render correctly', () => {
		render(<Alert message="aaa" />)
		const element = screen.getByTestId('x-alert')
		expect(element).toHaveClass('x-alert')
	})

	it('should can render a icon', () => {
		render(<Alert message="sss" icon="info-circle" />)
		const element = screen.getByTestId('x-alert')
		expect(element.getElementsByClassName('x-alert__icon').length).not.toBe(0)
	})

	it('should can close when closeable', () => {
		const props = { onClose: jest.fn() }
		render(<Alert message="ss" {...props} closeable/>)
		const element = screen.getByTestId('x-alert')
		expect(element).toBeInTheDocument()
		const closeIcon = element.getElementsByClassName('x-alert__close')[0]
		fireEvent.click(closeIcon)
		expect(props.onClose).toHaveBeenCalled()
		expect(element).not.toBeInTheDocument()
	})
})
