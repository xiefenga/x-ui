import Dragger from './Dragger'
import classNames from 'classnames'
import UploadList from './UploadList'
import axios from '../../utils/request'
import { PropsWithClassName } from '../../types/x-ui'
import React, { useRef, useState, useCallback } from 'react'

type UploadFileStatus = 'ready' | 'error' | 'success' | 'uploading' | 'removed'

type ChangeInfo = { file: UploadFile, fileList: UploadFile[], event?: ProgressEvent<XMLHttpRequest> }

export interface UploadFile {
	uid?: string
	name: string
	percent?: number
	size?: number
	status: UploadFileStatus
	type?: string
	lastModified?: number
	originFileObj?: File
	response?: any
	url?: string
	error?: any
}

interface UploadBaseProps {
	action: string
	name?: string
	headers?: object
	data?: object
	withCredentials?: boolean
	accept?: string
	multiple?: boolean
	fileList?: UploadFile[]
	defaultFileList?: UploadFile[]
	showUploadList?: boolean
	beforeUpload?: (file: UploadFile, fileList: UploadFile[]) => boolean | Promise<File>
	onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
	onChange?: (info: ChangeInfo) => void
	onRemove?: (file: UploadFile) => boolean
}

export type UploadProps = PropsWithClassName<UploadBaseProps>

const hideStyle = { display: 'none' }

const fixUid = (list: UploadFile[]): UploadFile[] => {
	return list.map((file, index) => {
		if (typeof file.uid === 'undefined') {
			file.uid = `x-file-${Date.now()}-${index}`
		}
		return file
	})
}

const createUploadFile = (file: File): UploadFile => {
	const { name, size, type, lastModified } = file
	const uid = `x-file-${Date.now()}`
	return {
		uid,
		name,
		size,
		type,
		status: 'ready',
		percent: 0,
		lastModified,
		originFileObj: file
	}
}

interface UploadComponent<T> extends React.FC<T> {
	Dragger: typeof Dragger
}

const Upload: UploadComponent<UploadProps> = (props) => {

	const {
		action,
		name = 'file',
		className,
		data = {},
		headers = {},
		withCredentials,
		accept,
		multiple,
		fileList,
		defaultFileList = [],
		showUploadList = true,
		beforeUpload,
		onChange,
		onRemove,
		onDrop
	} = props

	const fileInput = useRef<HTMLInputElement>(null)

	const fixedFileList = fixUid(fileList ?? defaultFileList)

	const [internalFileList, setInternalFileList] = useState<UploadFile[]>(fixedFileList)

	const classes = classNames(
		'x-upload',
		className
	)

	const httpHeaders = {
		...headers,
		'Content-Type': 'multipart/form-data',
	}

	const clickFileInput = useCallback(() => {
		fileInput.current?.click()
	}, [])

	// 触发 onChange ，无论是否受控
	const internalOnChange = (uploadFile: UploadFile, event?: ProgressEvent<XMLHttpRequest>) => {
		// 非受控
		if (typeof fileList === 'undefined' && onChange) {
			setInternalFileList(list => {
				onChange({ file: uploadFile, fileList: list, event })
				return list
			})
		} else if (fileList && onChange) {	// 受控
			onChange({
				event,
				file: uploadFile,
				fileList: uploadFile.status === 'removed'
					? fileList.filter(file => file.status !== 'removed')
					: [...fileList, uploadFile]
			})
		}
	}
	// 触发 onRemove，无论是否受控
	const internalOnRemove = (file: UploadFile) => {
		const remove = onRemove ? onRemove(file) : true
		if (remove === false) {
			return
		}
		// 更新 fileList
		updateUploadFile(file, { status: 'removed' })
		if (typeof fileList === 'undefined') {
			setInternalFileList(list => list.filter(file => file.status !== 'removed'))
		}
		// 触发 onChange
		internalOnChange(file)
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		// chrome 下存在 选择完文件之后，第二次未选择文件 也会触发 change 事件
		if (!files || !files.length) {
			return
		}
		// 上传文件
		uploadFileList(files)
		// 解决 input 二次导入相同文件名文件不触发 change 事件
		event.target.value = ''
	}

	const uploadFileList = (files: FileList) => {
		Array.from(files).forEach(async file => {
			const interalFile = createUploadFile(file)
			if (beforeUpload) {
				const list = fileList ?? internalFileList
				const result = beforeUpload(interalFile, list)
				if (result === true) {
					uploadFile(interalFile)
				} else if (result instanceof Promise) {
					try {
						const newFile = createUploadFile(await result)
						uploadFile(newFile)
					} catch (error) {
						onChange && onChange({
							file: { ...interalFile, status: 'error', error },
							fileList: list
						})
					}
				}
			} else {
				uploadFile(interalFile)
			}
		})
	}

	const updateUploadFile = (uploadFile: UploadFile, props: Partial<UploadFile>) => {
		Object.entries(props).forEach(([key, val]) => {
			uploadFile[key as keyof UploadFile] = val
		})
		if (typeof fileList === 'undefined') {
			// 刚开始上传列表没有该文件，需要增加到列表
			setInternalFileList(list => {
				return list.find(file => file.uid === uploadFile.uid)
					? list
					: [...list, uploadFile]
			})
			setInternalFileList(list => {
				return list.map(file => file.uid === uploadFile.uid ? { ...uploadFile } : file)
			})
		}
	}

	const uploadFile = async (uploadFile: UploadFile) => {
		updateUploadFile(uploadFile, { status: 'uploading' })
		internalOnChange(uploadFile)
		const formData = new FormData()
		formData.append(name, uploadFile.originFileObj!)
		Object.entries(data).forEach(([key, val]) => {
			formData.append(key, val)
		})
		try {
			const response = await axios.post(action, formData, {
				headers: httpHeaders,
				withCredentials,
				onUploadProgress: e => {
					const percent = Math.round(e.loaded / e.total * 100)
					updateUploadFile(uploadFile, { percent, status: 'uploading' })
					internalOnChange(uploadFile, e)
				}
			})
			updateUploadFile(uploadFile, { percent: 100, status: 'success', response })
			internalOnChange(uploadFile)
		} catch (error) {
			updateUploadFile(uploadFile, { status: 'error', response: error })
			internalOnChange(uploadFile)
		}
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		uploadFileList(e.dataTransfer.files)
		onDrop && onDrop(e)
	}

	return (
		<div className={classes}>
			<div
				onDrop={handleDrop}
				onClick={clickFileInput}
				className="x-upload__select"
			>
				{props.children}
				<input
					type="file"
					accept={accept}
					ref={fileInput}
					style={hideStyle}
					multiple={multiple}
					onChange={handleFileChange}
				/>
			</div>
			{showUploadList && <UploadList list={fileList ?? internalFileList} onRemove={internalOnRemove} />}
		</div>
	)
}

Upload.Dragger = Dragger

Upload.displayName = 'x-upload'

export default Upload
