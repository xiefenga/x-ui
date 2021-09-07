import React from 'react'
import Icon from '../index'
import { IconProps } from '../Icon'
import { render, screen, cleanup } from '@testing-library/react'

describe('Icon component test', () => {
	it('should render correct', () => {
		render(<Icon icon="coffee" />)
		const element = screen.getByTestId(Icon.displayName)
		expect(element).toHaveClass('x-icon')
	})

	it('should has theme', () => {
		const testTheme = (theme: IconProps['theme']) => {
			render(<Icon theme={theme} icon="coffee" />)
			const element = screen.getByTestId(Icon.displayName)
			expect(element).toHaveClass('x-icon--' + theme)
			cleanup()
		}
		testTheme('primary')
		testTheme('danger')
	})
	
	it('should has different size', () => {
		const testSize = (size: IconProps['size']) => {
			render(<Icon size={size} icon="coffee" />)
			const element = screen.getByTestId(Icon.displayName)
			expect(element).toHaveClass('fa-' + size)
			cleanup()
		}
		testSize('lg')
		testSize('10x')
	})
	
	it('should has animation -- spin', () => {
		render(<Icon spin icon="coffee" />)
		const element = screen.getByTestId(Icon.displayName)
		expect(element).toHaveClass('fa-spin')
	})

	it('should has animation -- pulse', () => {
		render(<Icon pulse icon="coffee" />)
		const element = screen.getByTestId(Icon.displayName)
		expect(element).toHaveClass('fa-pulse')
	})

})