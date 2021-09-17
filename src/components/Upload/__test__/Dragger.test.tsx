import React from 'react'
import BaseDragger from '../Dragger'
import { UploadProps } from '../Upload'
import request from '../../../utils/request'
import { withTestId } from '../../../utils/test'
import { screen, render, fireEvent, waitFor, createEvent } from '@testing-library/react'

const Dragger = withTestId(BaseDragger)

const { testId } = Dragger

const testFile = new File(['aaaa'], 'test.md', { type: 'text/markdown' })

jest.mock('../../../utils/request')

const mockedRequest = request as jest.Mocked<typeof request>

const baseDraggerTestAction = (props: UploadProps) => {
	render(
		<Dragger {...props}>
			<div>上传</div>
		</Dragger>
	)
	return screen.getByTestId(testId)
}

const fireDrop = (element: HTMLElement) => {
	const area = element.querySelector('.x-upload__drag')
	const mockDropEvent = createEvent.drop(area)
	Object.defineProperty(mockDropEvent, 'dataTransfer', {
		value: {
			files: [testFile]
		}
	})
	fireEvent(area, mockDropEvent)
}

describe('Dragger component test', () => {
	it('should could upload file with drop', async () => {
		const element = baseDraggerTestAction({
			action: ''
		})

		// 请求成功
		mockedRequest.post.mockResolvedValue({ data: {} })
		fireDrop(element)

		await waitFor(() => {
			const item = element.querySelector('.x-upload__list-item') as HTMLDivElement
			expect(item).toBeInTheDocument()
		})

		// 请求失败
		mockedRequest.post.mockRejectedValue('error')
		fireDrop(element)

		await waitFor(() => {
			const item = element.querySelectorAll('.x-upload__list-item')[1] as HTMLDivElement
			expect(item).toBeInTheDocument()
			expect(item).toHaveClass('x-upload__list-item--error')
		})
	})

	it('should call onDrop when drop a file', async () => {
		const onDrop = jest.fn()
		const element = baseDraggerTestAction({
			action: '',
			onDrop
		})
		mockedRequest.post.mockRejectedValue('error')
		fireDrop(element)
		await waitFor(() => {
			expect(onDrop).toHaveBeenCalled()
		})
	})
})