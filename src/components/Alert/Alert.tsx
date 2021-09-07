import Icon from '../Icon'
import classNames from 'classnames'
import React, { useState } from 'react'
import { PropsWithClassName } from '../../types/x-ui'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface AlertBaseProps {
	message: string
	icon?: IconProp
	closeable?: boolean
	onClose?: React.MouseEventHandler<SVGSVGElement>
}

export type AlertProps = PropsWithClassName<AlertBaseProps>

const testId = process.env.NODE_ENV === 'test' ? { 'data-testid': 'x-alert' } : {}

const Alert: React.VFC<AlertProps> = (props) => {
	const {
		icon,
		className,
		message,
		closeable = false,
		onClose,
	} = props

	const [closed, setClosed] = useState(false)

	const classes = classNames(
		'x-alert',
		className
	)

	if (closed) {
		return null
	}

	const onClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
		onClose && onClose(e)
		setClosed(true)
	}

	return (
		<div className={classes} {...testId}>
			{icon && <Icon className="x-alert__icon" icon={icon} />}
			<div className="x-alert__text">
				{message}
			</div>
			{closeable && <Icon onClick={onClick} icon="times" className="x-alert__close" />}
		</div>
	)
}

export default Alert
