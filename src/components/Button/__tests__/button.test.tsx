import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Button from '../Button'

describe('Button component test', () => {
	it('should render correct default button', () => {
		render(<Button>click</Button>)
		const element = screen.getByTestId('x-button') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element).toHaveClass('x-btn')
		expect(element.disabled).toBeFalsy()
	})

	it('should render correct with different types', () => {
		expect(
			render(<Button type="primary">click</Button>).getByTestId('x-button')
		).toHaveClass('x-btn--primary')

		cleanup()

		expect(
			render(<Button type="link">link</Button>).getByTestId('x-button')
		).toHaveClass('x-btn--link')
	})

	it('should render an anchor when has href prop', () => {
		render(
			<Button type="primary" href="https://www.baidu.com">
        baidu
			</Button>
		)
		const element = screen.getByTestId('x-button') as HTMLAnchorElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('A')
		expect(element).toHaveClass('x-btn--primary')
	})

	it('should invoke click event correctly', () => {
		const props = { onClick: jest.fn() }
		render(<Button {...props}>click</Button>)
		const element = screen.getByTestId('x-button') as HTMLButtonElement
		fireEvent.click(element)
		expect(props.onClick).toHaveBeenCalled()
	})

	it('should render a disabled button when get disabled', () => {
		const props = { disabled: true, onClick: jest.fn() }

		// button
		render(<Button {...props}>click</Button>)
		const element = screen.getByTestId('x-button') as HTMLButtonElement
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(props.onClick).not.toHaveBeenCalled()

		cleanup()

		// anchor
		render(
			<Button {...props} href="/abc">
				{' '}
        link{' '}
			</Button>
		)
		const link = screen.getByTestId('x-button') as HTMLAnchorElement
		expect(link).toHaveClass('x-btn--disabled')
		fireEvent.click(element)
		expect(props.onClick).not.toHaveBeenCalled()
	})

	it('should render a button with classname and htmlType', () => {
		const element = render(
			<Button className="demo" htmlType="button">
        classname button
			</Button>
		).getByTestId('x-button') as HTMLButtonElement
		expect(element).toHaveClass('demo')
		expect(element.type).toEqual('button')
	})

	it('should render a block button when receive block prop', () => {
		render(<Button block>block button</Button>)
		const blockButton = screen.getByTestId('x-button')
		expect(blockButton).toHaveClass('x-btn--block')
	})

	it('should be loading status when loading prop is true', () => {
		const props = { loading: true, onClick: jest.fn() }

		render(<Button {...props}>loding button</Button>)
		const loadingButton = screen.queryByTestId('x-button') as HTMLButtonElement
		expect(loadingButton).toHaveClass('x-btn--loading')
		expect(
			loadingButton.getElementsByClassName('x-btn__loading-icon').length
		).toEqual(1)
		fireEvent.click(loadingButton)
		expect(props.onClick).not.toHaveBeenCalled()
	})
})
