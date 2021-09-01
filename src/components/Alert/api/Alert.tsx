import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface AlertProps {
  message: string
  icon?: IconProp
  closeable?: boolean
  onClose?: (e: React.MouseEvent<SVGSVGElement>) => void
}

const Alert: React.FC<AlertProps> = () => null

Alert.defaultProps = {
	closeable: false
}

export default Alert