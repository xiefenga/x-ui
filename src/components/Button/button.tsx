import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'

type ButtonSize = 'small' | 'large' | 'middle'

type ButtonShape = 'circle' | 'round'

type ButtonType = 'primary' | 'link' | 'default'

type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface ButtonBaseProps {
  disabled: boolean
  size: ButtonSize
  type: ButtonType
  block: boolean
  shape: ButtonShape
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

const baseClassName = 'x-btn'

const btnSizeClassName: Record<ButtonSize, string> = {
  large: `${baseClassName}-lg`,
  middle: '',
  small: `${baseClassName}-sm`
}

const btnTypeClassName = (type: ButtonType) => type === 'default' ? '' : `${baseClassName}-${type}`

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
    ...rest
  } = props

  const classes = classNames(
    baseClassName,
    className,
    btnSizeClassName[size],
    { [`${baseClassName}-block`]: block },
    btnTypeClassName(type),
    { 'disabled': href && disabled }
  )

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
    } else {
      onClick && onClick(e)
    }
  }

  const anchorProps = {
    href,
    target,
    className: classes,
    onClick: handleClick,
    ...rest
  }

  const buttonProps = {
    onClick,
    disabled,
    type: htmlType,
    className: classes,
    ...rest
  }

  return (
    href
      ? (<a {...anchorProps}> {children} </a>)
      : (<button {...buttonProps}> {children} </button>)
  )
}

Button.displayName = 'x-Button'

export default Button
