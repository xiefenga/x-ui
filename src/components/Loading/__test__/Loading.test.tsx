import Icon from '../../Icon'
import Loading from '../Loading'
import React, { useState } from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

describe('Loading component test', () => {
	it('should render loading state correctly', () => {
		const Example: React.FC<{}> = () => {
			const [loading, setLoading] = useState(false)
			return (
				<div>
					<button data-testid="button" onClick={() => setLoading(!loading)}></button>
					<Loading loading={loading} />
				</div>
			)
		}
		render(<Example />)
		const loadingElement = screen.getByTestId(Loading.displayName)
		expect(loadingElement).not.toHaveClass('x-loading--spinning')
		const buttonElement = screen.getByTestId('button')
		fireEvent.click(buttonElement)
		expect(loadingElement).toHaveClass('x-loading--spinning')
	})

	it('should has custom desc', () => {
		render(<Loading loading tip="loading..." />)
		const element = screen.getByTestId(Loading.displayName).getElementsByClassName('x-loading__tip')[0] as HTMLDivElement
		expect(element).toBeInTheDocument()
		expect(element.innerHTML).toBe('loading...')
	})

	it('should has different size', () => {
		render(<Loading loading tip="loading..." size="large" />)
		let element = screen.getByTestId(Icon.displayName)
		expect(element).toHaveClass('fa-lg')
		cleanup()
		render(<Loading loading tip="loading..." size="small" />)
		element = screen.getByTestId(Icon.displayName)
		expect(element).toHaveClass('fa-sm')
	})
})