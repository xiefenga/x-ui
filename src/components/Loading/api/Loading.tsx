interface LoadingBaseProps {
  /**
   * 加载状态
   */
  loading: boolean;
  /**
   * 提示消息
   */
  tip: string;
  wrapperClassName: string;
}

export type LoadingProps = Partial<LoadingBaseProps>;

const Loading: React.FC<LoadingProps> = () => null;

Loading.defaultProps = {
  loading: false,
};

export default Loading;
