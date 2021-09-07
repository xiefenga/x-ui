import React from 'react'
import Icon from '../Icon'
import classNames from 'classnames'
import { PropsWithClassName } from '../../types/x-ui'

type LoadingSize = 'default' | 'large' | 'small'

interface LoadingBaseProps {
  tip: string
	size: LoadingSize
  loading: boolean
  wrapperClassName: string
}

export type LoadingProps = PropsWithClassName<Partial<LoadingBaseProps>>

const sizeTable: Record<LoadingSize, 'lg' | 'sm' | undefined> = {
	default: undefined,
	large: 'lg',
	small: 'sm'
}

const testId = process.env.NODE_ENV === 'test' ? { 'data-testid': 'x-loading' } : {}

const Loading: React.FC<LoadingProps> = props => {

	const {
		tip,
		size = 'default',
		children,
		className,
		loading = true,
		wrapperClassName
	} = props

	const classes = classNames(
		'x-loading',
		className,
		{ 'x-loading--spinning': loading }
	)

	const loadingBaseElement = (
		<div className={classes} {...testId}>
			<div className="x-loading__container">
				<span className="x-loading__inner">
					<Icon className="x-loading__icon" size={sizeTable[size]} icon="spinner" />
				</span>
				{tip && <div className="x-loading__tip">{tip}</div>}
			</div>
		</div>
	)

	if (children) {

		const wrapperClasses = classNames(
			'x-loading__wrapper',
			wrapperClassName
		)

		return (
			<div className={wrapperClasses}>
				{loadingBaseElement}
				<div className="x-loading__body">
					{children}
				</div>
			</div>
		)
	}

	return loadingBaseElement
}

Loading.displayName = 'x-loading'

export default Loading