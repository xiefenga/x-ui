import React, { useCallback } from 'react'
import Upload, { UploadProps } from './Upload'

const Dragger: React.FC<UploadProps> = (props) => {

	const {
		onDrop,
		children,
		...restProps
	} = props

	const initDragDefault = useCallback(
		(e: React.DragEvent<HTMLDivElement>)=> {
			e.preventDefault()
		}, []
	)

	// drop 事件会冒泡
	const handleDrap = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			onDrop && onDrop(e)
		},[]
	)

	return (
		<Upload {...restProps} onDrop={handleDrap}>
			<div className="x-upload__drag"
				onDragOver={initDragDefault}
				onDragEnter={initDragDefault}
			>
				{children}
			</div>
		</Upload>
	)
}

export default Dragger
