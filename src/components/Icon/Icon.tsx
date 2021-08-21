import React from 'react'
import classNames from 'classnames'
import { PropsWithClassName } from 'x-ui'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type ThemeProps = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

interface IconBaseProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

export type IconProps = PropsWithClassName<IconBaseProps>

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
      className={classes}
      {...restProps}
    />
  )
}

export default Icon