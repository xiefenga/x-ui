import React from 'react'
import BaseAutoComplete, { AutoCompleteProps } from '../AutoComplete'
import { withTestId } from '../../../utils/test'
import { render, screen, fireEvent } from '@testing-library/react'

const AutoComplete = withTestId(BaseAutoComplete)

const { testId } = AutoComplete

const baseAutoCompleteTestAciton = (props: AutoCompleteProps = {}) => {
	render(<AutoComplete {...props} />)
	return screen.getByTestId(testId).querySelector('.x-autocomplete') as HTMLDivElement
}

describe('AutoComplete component test', () => {
	it('should render correctly', () => {
		const element = baseAutoCompleteTestAciton()
		expect(element).toBeInTheDocument()
		const input = element.querySelector('input')
		expect(input).toBeInTheDocument()
		const list = element.querySelector('.x-autocomplete__list')
		expect(list).not.toBeInTheDocument()
	})

	it('should show list when focus and hide list when blur', () => {
		const element = baseAutoCompleteTestAciton({
			options: [
				{ value: 'aaaa' },
				{ value: 'bbbb' },
				{ value: 'cccc' }
			]
		})
		const input = element.querySelector('input')
		fireEvent.focus(input)
		const list = element.querySelector('.x-autocomplete__list')
		expect(list).toBeInTheDocument()
		fireEvent.blur(input)
		setTimeout(() => {
			expect(list).not.toBeInTheDocument()
		}, 500)
	})

	it('should trigger focus and blur event correctly', () => {
		const onBlur = jest.fn()
		const onFocus = jest.fn()
		const element = baseAutoCompleteTestAciton({
			onFocus,
			onBlur
		})
		const input = element.querySelector('input')
		fireEvent.focus(input)
		expect(onFocus).toHaveBeenCalled()
		fireEvent.blur(input)
		expect(onBlur).toHaveBeenCalled()
	})

	it('should triggle onSearch when type value', () => {
		const onSearch = jest.fn()
		const element = baseAutoCompleteTestAciton({
			onSearch
		})
		const input = element.querySelector('input')
		fireEvent.change(input, { target: { value: 'aa' } })
		expect(onSearch).toHaveBeenCalled()
		expect(onSearch.mock.calls[0][0]).toBe('aa')
	})

	it('should triggle onSelect and onChange select list item', () => {
		const onSelect = jest.fn()
		const onChange = jest.fn()
		const element = baseAutoCompleteTestAciton({
			onSelect,
			onChange,
			options: [
				{ value: 'aaaa' },
				{ value: 'bbbb' },
				{ value: 'cccc' }
			] 
		})
		const input = element.querySelector('input')
		fireEvent.focus(input)
		const lists = element.querySelectorAll('.x-autocomplete__list-item')
		fireEvent.click(lists[1])
		expect(onSelect).toHaveBeenCalled()
		expect(onSelect.mock.calls[0][0]).toBe('bbbb')
		expect(onSelect.mock.calls[0][1]).toEqual({ value: 'bbbb' })
		expect(onChange).toHaveBeenCalled()
		expect(onChange.mock.calls[0][0]).toBe('bbbb')
	})
})