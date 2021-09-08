import Icon from '../Icon'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { PropsWithClassAndStyle } from '../../types/x-ui'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React, { useState, useRef, useLayoutEffect } from 'react'
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition'

type AlertType = 'success' | 'info' | 'warning' | 'error'

interface AlertBaseProps {
	message: string
	icon?: IconProp
	closeable?: boolean
	type?: AlertType
	onClose?: React.MouseEventHandler<SVGSVGElement>
}

export type AlertProps = PropsWithClassAndStyle<AlertBaseProps>

const Alert: React.VFC<AlertProps> = (props) => {
	const {
		icon,
		className,
		message,
		type = 'warning',
		closeable = false,
		onClose,
		style
	} = props

	const [closed, setClosed] = useState(false)

	const wrapperRef = useRef<HTMLDivElement>(null)

	// 每次更新都要执行
	useLayoutEffect(() => {
		if (closeable && wrapperRef.current) {
			// just for close animation
			wrapperRef.current.style.maxHeight = 	wrapperRef.current.offsetHeight + 'px'
		}
	})

	const classes = classNames(
		'x-alert',
		className,
		`x-alert--${type}`
	)

	const onClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
		onClose && onClose(e)
		setClosed(true)
	}

	const transitionClass: CSSTransitionClassNames = {
		exit: 'x-alert--exit',
		exitActive: 'x-alert--exitActive'
	}

	return (
		<CSSTransition in={!closed}	timeout={300} unmountOnExit classNames={transitionClass}>
			<div className={classes} style={style} ref={wrapperRef}>
				{icon && <Icon className="x-alert__icon" icon={icon} />}
				<div className="x-alert__text">
					{message}
				</div>
				{closeable && <Icon onClick={onClick} icon="times" className="x-alert__close" />}
			</div>
		</CSSTransition>
	)
}

export default Alert
