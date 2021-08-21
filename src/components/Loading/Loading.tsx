import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'

interface LoadingBaseProps {
  loading: boolean
  tip: string
  wrapperClassName: string
}

export type LoadingProps = PropsWithClassName<Partial<LoadingBaseProps>>

const Loading: React.FC<LoadingProps> = props => {

  const {
    tip,
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

  if (children) {

    const wrapperClasses = classNames(
      'x-loading__wrapper',
      wrapperClassName
    )

    return (
      <div className={wrapperClasses}>
        <div className={classes}>
          <div className="x-loading__container">
            <span className="x-loading__inner">
              <svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor">
                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
                </path>
              </svg>
            </span>
            {tip && <span className="x-loading__tip">{tip}</span>}
          </div>
        </div>
        <div className="x-loading__body">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={classes}>
      <span className="x-loading__inner">
        <svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor">
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
          </path>
        </svg>
      </span>
    </div>
  )
}

export default Loading