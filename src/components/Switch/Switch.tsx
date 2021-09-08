import classNames from 'classnames'
import React, { useState, useEffect } from 'react'
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

	const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked)

	// 受控状态，更新 checked 状态
	useEffect(() => {
		if (checked !== undefined) {
			setInternalChecked(checked)
		}
	}, [checked])

	const classes = classNames(
		'x-switch',
		className,
		{ 'x-switch--disabled': disabled },
		{ 'x-switch--sm': size === 'small' },
		{ 'x-switch--checked': internalChecked },
	)

	const onInternalClick: React.MouseEventHandler<HTMLButtonElement> = e => {
		if (!disabled) {
			if (checked === undefined) {
				setInternalChecked(!internalChecked)
			}
			onClick && onClick(e)
			onChange && onChange(!internalChecked)
		}
	}

	return (
		<button className={classes} onClick={onInternalClick}></button>
	)
}

Switch.displayName = 'x-switch'

export default Switch
