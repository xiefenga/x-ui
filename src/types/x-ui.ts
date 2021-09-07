import React from 'react'

export type PropsWithClassName<P> = P & { className?: string }

export type PropsWithStyle<P> = P & { style?: React.CSSProperties }

export type PropsWithCS<P> = PropsWithClassName<PropsWithStyle<P>>

export type PropsWithClassAndStyle<P> = PropsWithClassName<PropsWithStyle<P>>

export type UnknowReactElement = React.ReactElement<unknown>

export type UnkownFCElement = React.FunctionComponentElement<unknown>