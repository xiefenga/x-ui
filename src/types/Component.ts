import type React from 'react'

export type PropsWithClassName<P> = P & { className?: string  }

export type FC<P> = React.FC<Partial<PropsWithClassName<P>>>