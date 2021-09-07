interface LoadingBaseProps {
  /**
   * 自定义描述文案
   */
  tip: string
  /**
   * 组件的尺寸
   */
  size: 'large' | 'small' | 'default'
  /**
   * 加载状态
   */
  loading: boolean
  /**
   * 当具有子元素时，给组件最外层元素的类名
   */
  wrapperClassName?: string
}

export type LoadingProps = Partial<LoadingBaseProps>

const Loading: React.FC<LoadingProps> = () => null

Loading.defaultProps = {
	loading: false,
	size: 'default'
}

export default Loading
