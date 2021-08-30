import React, { useState } from 'react'
import { PropsWithCS } from 'x-ui'
import classNames from 'classnames'
import Input from '../Input'

interface AutoCompleteBaseProps {
	placeholder: string
	options: { label: string, value: string }[]
	onSearch: (value: string) => void
	onSelect: (value: string, option: { label: string, value: string }) => void
}

export type AutoCompleteProps = PropsWithCS<Partial<AutoCompleteBaseProps>>

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {

	const {
		className,
		onSearch,
		onSelect,
		placeholder,
		options,
	} = props

	const [inputValue, setInputValue] = useState<string>('')

	const [showList, setShowList] = useState<boolean>(false)

	const classes = classNames(
		'x-autocomplete',
		className
	)

	const listClasses = classNames(
		'x-autocomplete__list',
		{ 'x-autocomplete__list--hide': !showList }
	)

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setShowList(e.target.value !== '')
		setInputValue(e.target.value)
		if (onSearch) {
			onSearch(e.target.value)
		}
	}

	const onFocus = () => {
		setShowList(!!options?.length)
	}

	const onBlur = () => {
		setShowList(false)
	}

	return (
		<div className={classes}>
			<Input value={inputValue} onFocus={onFocus} onBlur={onBlur} onChange={onChange} placeholder={placeholder} />
			<ul className={listClasses}>
				{options?.map((val, index) => (
					<li key={`${JSON.stringify(val.value)}-${index}`}
						onClick={() => { onSelect && onSelect(val.value, val) }}
					>
						{val.label}
					</li>
				))}
			</ul>
		</div>
	)
}

export default AutoComplete
