import React from 'react'
import Loading from '../Loading'
import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'

type ButtonSize = 'small' | 'large' | 'middle'

type ButtonShape = 'circle' | 'round'

type ButtonType = 'default' | 'primary' | 'link' | 'success' | 'info' | 'warning' | 'danger'

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

type AnchorButtonProps = {
  href: string
  target: string
} & ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>

type NativeButtonProps = {
  htmlType: ButtonHTMLType
} & ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>

export type ButtonProps = PropsWithClassName<Partial<NativeButtonProps & AnchorButtonProps>>

const btnSizeClassName: Record<ButtonSize, string> = {
  large: 'x-btn--lg',
  middle: '',
  small: 'x-btn--sm'
}

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
    { [`x-btn--${type}`]: type !== 'default' },
  )

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
    } else {
      onClick && onClick(e)
    }
  }

  if (href) {
    const anchorProps = {
      href,
      target,
      className: classes,
      onClick: handleClick,
      ...rest
    }

    return (
      <a {...anchorProps}>
        {!disabled && loading && <Loading className="x-btn__loading-icon" />}
        <span>{children}</span>
      </a>
    )
  }

  const buttonProps = {
    onClick,
    disabled,
    type: htmlType,
    className: classes,
    ...rest
  }

  return (
    <button {...buttonProps}>
      {!disabled && loading && <Loading className="x-btn__loading-icon" />}
      <span>{children}</span>
    </button>
  )
}

Button.displayName = 'x-Button'

export default Button
