import React from 'react'
import Icon from '../Icon'
import classNames from 'classnames'
import { UploadFile } from './Upload'

interface UploadListProps {
  list: UploadFile[]
  onRemove: (file: UploadFile) => void
}

const UploadList: React.FC<UploadListProps> = (props) => {
	const {
		list,
		onRemove
	} = props

	return (
		<div className="x-upload__list">
			{list.map(file => {

				const onClick = () => {
					if (file.status !=='uploading') {
						onRemove(file)
					}
				}

				const classes = classNames(
					'x-upload__list-item',
					{ 'x-upload__list-item--error': file.status === 'error' },
					{ 'x-upload__list-item--uploading': file.status === 'uploading' }
				)

				return (
					<div key={file.uid} className={classes}>
						<div className="list-item__icon">
							<Icon icon="paperclip" />
						</div>
						<div className="list-item__title">
							{file.name}
						</div>
						<div className="list-item__action" onClick={onClick}>
							{file.status === 'uploading'
								? <Icon icon="spinner" spin size="sm" />
								: <Icon icon="trash" size="sm" />
							}
						</div>
					</div>
				)
			})}
		</div>
	)
}

UploadList.displayName = 'x-uploadlist'

export default UploadList
