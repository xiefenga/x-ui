import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from '../../types/Component'

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

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const baseClassName = 'x-btn'

const btnSizeClassName: Record<ButtonSize, string> = {
  large: `${baseClassName}-lg`,
  middle: '',
  small: `${baseClassName}-sm`
}

const btnTypeClassName = (type: ButtonType) => type === 'default' ? '' : `${baseClassName}-${type}`

const Button: React.FC<PropsWithClassName<ButtonProps>> = props => {

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

  return (
    href
      ? (
        <a
          {...rest}
          href={href}
          className={classes}
          target={target}
        >
          {children}
        </a>
      ) : (
        <button
          {...rest}
          type={htmlType}
          className={classes}
          disabled={disabled}
        >
          {children}
        </button>
      )

  )
}


export default Button
