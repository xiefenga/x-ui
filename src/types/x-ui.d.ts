declare module "x-ui" {
  type PropsWithClassName<P> = P & { className?: string };

  type PropsWithStyle<P> = P & { style?: React.CSSProperties };

  type PropsWithCS<P> = PropsWithClassName<PropsWithStyle<P>>;

  type UnknowReactElement = React.ReactElement<unknown>;

  type UnkownFCElement = React.FunctionComponentElement<unknown>;
}
