import React from 'react'
import request from '../../../utils/request'
import { withTestId } from '../../../utils/test'
import BaseUpload, { UploadFile, UploadProps } from '../Upload'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'

const Upload = withTestId(BaseUpload)

const { testId } = Upload

const testFile = new File(['aaaa'], 'test.md', { type: 'text/markdown' })

jest.mock('../../../utils/request')

const mockedRequest = request as jest.Mocked<typeof request>

const baseUploadTestAction = (props: UploadProps) => {
	render(
		<Upload {...props}>
			<button>上传</button>
		</Upload>
	)
	return screen.getByTestId(testId)
}

const testFileList = (element: HTMLElement) => {
	const item = element.querySelectorAll('.x-upload__list-item') as NodeListOf<HTMLDivElement>

	expect(item[0]).toBeInTheDocument()

	expect(item[0]).toHaveClass('x-upload__list-item--uploading')

	expect(item[1]).toBeInTheDocument()

	expect(item[2]).toBeInTheDocument()

	expect(item[2]).toHaveClass('x-upload__list-item--error')
}

const fireInputChange = (element: HTMLElement) => {
	const input = element.querySelector('input[type=file]')
	fireEvent.change(input, { target: { files: [testFile] } })
}

describe('Upload component test', () => {
	it('should could upload file correctly', async () => {
		const element = baseUploadTestAction({
			action: ''
		})

		// 请求成功
		mockedRequest.post.mockResolvedValue({ data: {} })
		fireInputChange(element)

		await waitFor(() => {
			const item = element.querySelector('.x-upload__list-item') as HTMLDivElement
			expect(item).toBeInTheDocument()
		})

		// 请求失败
		mockedRequest.post.mockRejectedValue('error')
		fireInputChange(element)

		await waitFor(() => {
			const item = element.querySelectorAll('.x-upload__list-item')[1] as HTMLDivElement
			expect(item).toBeInTheDocument()
			expect(item).toHaveClass('x-upload__list-item--error')
		})
	})

	it('should render default filelist', () => {
		const element = baseUploadTestAction({
			action: '',
			defaultFileList: [
				{ name: '1.md', status: 'uploading' },
				{ name: '2.md', status: 'success' },
				{ name: '3.md', status: 'error' }
			]
		})

		testFileList(element)
	})

	it('should render controlled with fileList', async () => {
		const element = baseUploadTestAction({
			action: '',
			fileList: [
				{ name: '1.md', status: 'uploading' },
				{ name: '2.md', status: 'success' },
				{ name: '3.md', status: 'error' }
			]
		})

		testFileList(element)

		mockedRequest.post.mockResolvedValue({ data: {} })
		fireInputChange(element)

		await waitFor(() => {
			const item = element.querySelectorAll('.x-upload__list-item')[3]
			expect(item).toBe(undefined)
		})
	})

	it('should call onChange when file status change', async () => {
		const mockCallback = jest.fn()
		const element = baseUploadTestAction({
			action: '',
			onChange: mockCallback
		})

		mockedRequest.get.mockResolvedValue({ data: {} })
		fireInputChange(element)

		await waitFor(() => {
			expect(mockCallback.mock.calls.length).toBe(2)

			expect(mockCallback.mock.calls[0][0]).toHaveProperty('file')
			expect(mockCallback.mock.calls[0][0]).toHaveProperty('fileList')
		})
	})

	it('should call beforeUpload when need judge file type', async () => {
		const mockCallback = jest.fn<boolean | Promise<File>, [UploadFile, UploadFile[]]>(
			() => {
				return false
			}
		)

		const element = baseUploadTestAction({
			action: '',
			beforeUpload: mockCallback
		})

		mockedRequest.get.mockResolvedValue({ data: {} })
		fireInputChange(element)

		await waitFor(() => {
			expect(mockCallback).toHaveBeenCalled()

			expect(mockCallback.mock.results[0].value).toBe(false)
			const items = element.querySelectorAll('.x-upload__list-item')
			expect(items.length).toBe(0)
		})
	})

	it('should call onRemove and onChange when remove file', async () => {
		const onRemove = jest.fn(), onChange = jest.fn()
		const element = baseUploadTestAction({
			action: '',
			fileList: [
				{ name: '1.md', status: 'error' }
			],
			onRemove,
			onChange
		})
		const item = element.querySelector('.list-item__action') as HTMLDivElement
		fireEvent.click(item)
		expect(onRemove).toHaveBeenCalled()
		expect(onChange).toHaveBeenCalled()
	})
})