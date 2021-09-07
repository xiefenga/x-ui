import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon'

type ButtonSize = 'small' | 'large' | 'middle'

type ButtonShape = 'circle' | 'round'

type ButtonType =
	| 'default'
	| 'primary'
	| 'link'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'

type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface ButtonBaseProps {
	disabled: boolean
	size: ButtonSize
	type: ButtonType
	block: boolean
	shape: ButtonShape
	loading: boolean
	onClick: React.MouseEventHandler<HTMLElement>
}

type OmitButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>

type AnchorButtonProps = {
	href: string
	target: string
} & ButtonBaseProps & OmitButtonHTMLAttributes

type NativeButtonProps = {
	htmlType: ButtonHTMLType
} & ButtonBaseProps & OmitButtonHTMLAttributes

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const btnSizeClassName: Record<ButtonSize, string> = {
	large: 'x-btn--lg',
	middle: '',
	small: 'x-btn--sm',
}

const testId = process.env.NODE_ENV === 'test' ? { 'data-testid': 'x-button' } : {}

const Button: React.FC<ButtonProps> = props => {
	const {
		size = 'middle',
		type = 'default',
		shape,
		block = false,
		children,
		className,
		disabled,
		htmlType = 'button',
		href,
		target,
		onClick,
		loading = false,
		...rest
	} = props

	const classes = classNames(
		'x-btn',
		className,
		btnSizeClassName[size],
		{ 'x-btn--block': block },
		{ [`x-btn--${shape}`]: !!shape },
		{ 'x-btn--disabled': href && disabled },
		{ 'x-btn--loading': !disabled && loading },
		{ [`x-btn--${type}`]: type !== 'default' }
	)

	if (href) {
		const anchorProps = {
			href,
			target,
			className: classes,
			onClick: disabled || loading ? undefined : onClick,
			...rest,
		}

		return (
			<a {...anchorProps} {...testId}>
				{!disabled && loading && <Icon icon="spinner" spin className="x-btn__loading-icon" />}
				<span>{children}</span>
			</a>
		)
	}

	const buttonProps = {
		onClick: loading ? undefined : onClick,
		disabled,
		type: htmlType,
		className: classes,
		...rest,
	}

	return (
		<button {...buttonProps} {...testId}>
			{!disabled && loading && <Icon icon="spinner" spin className="x-btn__loading-icon" />}
			<span>{children}</span>
		</button>
	)
}

Button.displayName = 'x-Button'

export default Button
