
export interface TabProps {
  /**
   * 当前激活的 tab 
   */
  activeKey?: string
  /**
   * 默认激活的 tab
   */
  defaultActiveKey?: string
  /**
   * tab 的样式
   */
  type?: 'line' | 'card'
  /**
   * 切换 tab 的回调
   */
  onChange?: (key: string) => void
  /**
   * tab 被点击的回调
   */
  onTabClick?: (key: string, e: MouseEvent) => void
}

const Tab: React.FC<TabProps> = () => null

Tab.defaultProps = {
	defaultActiveKey: '第一个tab',
	type: 'line'
}

export default Tab