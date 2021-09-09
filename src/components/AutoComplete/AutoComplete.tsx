import Input from '../Input'
import classNames from 'classnames'
import React, { useState , useEffect } from 'react'
import { PropsWithClassName } from '../../types/x-ui'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition'

type ListItem = { label?: string, value: string }

interface AutoCompleteBaseProps {
	allowClear: boolean
	placeholder: string
	options: ListItem[]
	value: string
	disabled: boolean
	onChange: (value: string) => void
	onFocus: React.FocusEventHandler<HTMLInputElement>
	onBlur: React.FocusEventHandler<HTMLInputElement>
	onSearch: (value: string) => void
	onSelect: (value: string, option: ListItem) => void
}

export type AutoCompleteProps = PropsWithClassName<Partial<AutoCompleteBaseProps>>

const transitionClass: CSSTransitionClassNames = {
	enter: 'x-autocomplete__list--enter',
	enterActive: 'x-autocomplete__list--enterActive',
	exit: 'x-autocomplete__list--exit',
	exitActive: 'x-autocomplete__list--exitActive'
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {

	const {
		className,
		onSearch,
		onSelect,
		value,
		onChange,
		onFocus,
		onBlur,
		placeholder,
		options,
		disabled = false,
		allowClear = false
	} = props

	const [inputValue, setInputValue] = useState<string>(value ?? '')

	const [focus, setFocus] = useState<boolean>(false)

	useEffect(() => {
		if (typeof value !== 'undefined') {
			setInputValue(value)
		}
	}, [value])

	const showList = focus && !!options?.length

	const classes = classNames(
		'x-autocomplete',
		className
	)

	const onInternalChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (typeof value === 'undefined') {
			setInputValue(e.target.value)
		}
		onChange && onChange(e.target.value)
		onSearch && onSearch(e.target.value)
	}

	const onIntrenalFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocus(true)
		onFocus && onFocus(e)
	}

	const onInternalBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocus(false)
		onBlur && onBlur(e)
	}

	return (
		<div className={classes}>
			<Input
				disabled={disabled}
				value={inputValue}
				onFocus={onIntrenalFocus}
				onBlur={onInternalBlur}
				onChange={onInternalChange}
				allowClear={allowClear}
				placeholder={placeholder}
			/>
			<CSSTransition in={showList} timeout={500} unmountOnExit classNames={transitionClass}>
				<ul className="x-autocomplete__list">
					{options?.map((option, index) => (
						<li
							className="x-autocomplete__list-item"
							key={`${JSON.stringify(option.value)}-${index}`}
							onClick={() => {
								if (typeof value === 'undefined') {
									setInputValue(option.label ?? option.value)
								}
								onChange && onChange(option.value)
								onSelect && onSelect(option.value, option)
							}}
						>
							{option.label ?? option.value}
						</li>
					))}
				</ul>
			</CSSTransition>
		</div>
	)
}

export default AutoComplete
