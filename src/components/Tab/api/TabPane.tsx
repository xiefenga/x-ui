export interface TabPaneProps {
  /**
   * 选项卡头显示文字
   */
  tab: string
  /**
   * 对应 activeKey
   */
  key?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
}

const TabPane:React.FC<TabPaneProps> = () => null

TabPane.defaultProps = {
	disabled: false
}

export default TabPane
