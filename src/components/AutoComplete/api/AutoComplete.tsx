
export interface AutoCompleteProps {
  /**
   * 是否允许清空
   */
	allowClear: boolean
  /**
   * 是否禁用
   */
  disabled: boolean
  /**
   * 输入框提示
   */
	placeholder: string
  /**
   * 数据化配置选项内容
   */
	options: { label?: string, value: string } []
  /**
   * 输入框内容，受控模式
   */
	value: string
  /**
   * 选中 option，或 input 的 value 变化时触发
   */
	onChange: (value: string) => void
  /**
   * 获得焦点时触发
   */
	onFocus: (e: FocusEvent) => void
  /**
   * 失去焦点时触发
   */
	onBlur:  (e: FocusEvent) => void
  /**
   * 搜索补全项的时候调用
   */
	onSearch: (value: string) => void
  /**
   * 被选中时调用
   */
	onSelect: (value: string, option: { label?: string, value: string }) => void
}

const AutoComplete: React.FC<Partial<AutoCompleteProps>> = () => null

AutoComplete.defaultProps = {
	disabled: false
}

export default AutoComplete