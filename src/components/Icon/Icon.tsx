import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type ThemeProps = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

interface IconBaseProps {
	theme: ThemeProps
}

export type IconProps = Partial<IconBaseProps> & FontAwesomeIconProps

const testId = process.env.NODE_ENV === 'test' ? { 'data-testid': 'x-icon' } : {}

const Icon: React.FC<IconProps> = props => {

	const {
		theme,
		className,
		...restProps
	} = props

	const classes = classNames(
		'x-icon',
		className,
		{ [`x-icon--${theme}`]: !!theme },
	)

	return (
		<FontAwesomeIcon
			{...testId}
			{...restProps}
			className={classes}
		/>
	)
}

Icon.displayName = 'x-icon'

export default Icon