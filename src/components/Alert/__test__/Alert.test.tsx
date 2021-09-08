import React from 'react'
import BaseAlert, { AlertProps } from '../Alert'
import { withTestId } from '../../../utils/test'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

const Alert = withTestId(BaseAlert)

const { testId } = Alert

const baseAlertTestAction = (props: Omit<AlertProps, 'message'> = {}): HTMLDivElement => {
	render(<Alert message="aaa" {...props} />)
	return screen.getByTestId(testId).querySelector('.x-alert') as HTMLDivElement
}

describe('Alert component test', () => {

	it('should render correctly', () => {
		const element = baseAlertTestAction()
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('x-alert--warning')
	})

	it('should has different type', () => {
		const types: AlertProps['type'][] = ['success', 'info', 'error']
		for (const type of types) {
			const element = baseAlertTestAction({ type })
			expect(element).toHaveClass('x-alert--' + type)
			cleanup()
		}
	})

	it('should can render a icon', () => {
		const element = baseAlertTestAction({ icon: 'info-circle' })
		const icon = element.querySelector('.x-alert__icon')
		expect(icon).toBeInTheDocument()
	})

	it('should can close when closeable', () => {
		const props = { onClose: jest.fn() , closeable: true}
		const element = baseAlertTestAction(props)
		expect(element).toBeInTheDocument()
		const closeIcon = element.querySelector('.x-alert__close')
		fireEvent.click(closeIcon)
		expect(props.onClose).toHaveBeenCalled()
		setTimeout(() => {
			expect(element).not.toBeInTheDocument()
		}, 500)
	})
})
