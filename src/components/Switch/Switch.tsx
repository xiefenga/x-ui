import classNames from 'classnames'
import React, { useState } from 'react'
import { PropsWithClassName } from '../../types/x-ui'

interface SwitchBaseProps {
	checked: boolean
	defaultChecked: boolean
	disabled: boolean
	size: 'default' | 'small'
	onChange: (checked: boolean) => void
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type SwitchProps = PropsWithClassName<Partial<SwitchBaseProps>>

const Switch: React.FC<SwitchProps> = (props) => {

	const {
		className,
		checked,
		size = 'default',
		disabled = false,
		defaultChecked = false,
		onChange,
		onClick
	} = props

	const [internalChecked, setInternalChecked] = useState(defaultChecked)

	const classes = classNames(
		'x-switch',
		className,
		{ 'x-switch--disabled': disabled },
		{ 'x-switch--sm': size === 'small' },
		{ 'x-switch--checked': (checked ?? internalChecked) },
	)

	const onInternalClick: React.MouseEventHandler<HTMLButtonElement> = e => {
		if (!disabled) {
			if (typeof checked === 'undefined') {
				setInternalChecked(!internalChecked)
			}
			onClick && onClick(e)
			onChange && onChange(!(checked ?? internalChecked))
		}
	}

	return (
		<button className={classes} onClick={onInternalClick} />
	)
}

Switch.displayName = 'x-switch'

export default Switch
