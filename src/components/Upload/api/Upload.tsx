import { UploadFile } from '../Upload'

interface UploadProps {
  /**
   * 上传到后台服务器的地址
   */
	action: string
  /**
   * 发到后台的文件参数名
   */
	name?: string
  /**
   * 上传所需要额外的请求头部
   */
	headers?: object
  /**
   * 上传所需的额外参数
   */
	data?: object
  /**
   * 上传请求时是否携带 cookie
   */
	withCredentials?: boolean
  /**
   * 接受上传的文件类型
   */
	accept?: string
  /**
   * 是否支持多选文件，按住 ctrl 或 cmd 可选择多个文件
   */
	multiple?: boolean
  /**
   * 已经上传的文件列表，受控模式
   */
	fileList?: UploadFile[]
  /**
   * 默认已经上传的文件列表
   */
	defaultFileList?: UploadFile[]
  /**
   * 是否展示文件列表
   */
	showUploadList?: boolean
  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传
   * 支持返回一个 Promise 对象，Promise 对象 resolve 时开始上传，reject 时则停止上传并处触发 onChange 事件，通过 file.error 可以取得 error 对象
   */
	beforeUpload?: (file: UploadFile, fileList: UploadFile[]) => boolean | Promise<File>
  /**
   * 上传文件状态改变时触发，上传中、完成、失败、移除都会调用这个函数
   */
	onChange?: (info: { file: UploadFile, fileList: UploadFile[], event?: ProgressEvent<XMLHttpRequest> }) => void
  /**
   * 点击移除文件时触发，返回值为 false 时不移除
   */
	onRemove?: (file: UploadFile) => boolean
  /**
   * 当文件被拖入上传区域时触发
   */
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
}

const Upload: React.FC<UploadProps> = () => null

Upload.defaultProps = {
	name: 'file'
}

export default Upload