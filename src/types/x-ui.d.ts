declare module 'x-ui' {
  
  type PropsWithClassName<P> = P & { className?: string }

  type UnknowReactElement = React.ReactElement<unknown>

  type UnkownFCElement = React.FunctionComponentElement<unknown>
}