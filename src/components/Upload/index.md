---
title: Upload
---

## 基本使用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Upload, Button } from "@xf/x-ui";

export default () => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
    <Button size="small">上传文件</Button>
  </Upload>
)

```

## 已上传的文件列表

使用 defaultFileList 设置已上传的内容

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Upload, Button } from "@xf/x-ui";
import type { UploadProps } from "@xf/x-ui";

export default () => {

	const defaultList: UploadProps['defaultFileList'] = [
		{
			uid: '1',
			name: 'image1.png',
			url: 'http://xiefeng.tech',
			status: 'success'
		},
		{
			uid: '2',
			name: 'image2.png',
			url: 'http://xiefeng.tech',
			status: 'uploading'
		},
		{
			uid: '3',
			name: 'image3.png',
			url: 'http://xiefeng.tech',
			status: 'error'
		}
	]

	return (
		<Upload 
			defaultFileList={defaultList}
			action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
		>
			<Button size="small">上传文件</Button>
		</Upload>
	)
}
```

## 受控的列表

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React, { useState } from "react";
import { Upload, Button } from "@xf/x-ui";
import type { UploadProps, UploadFile } from "@xf/x-ui";

export default () => {

	const [fileList, setFileList] = useState<UploadFile[]>([])

	const onChange: UploadProps['onChange'] = ({ fileList }) => {
		setFileList(fileList)
	}

	return (
		<Upload 
			fileList={fileList}
			onChange={onChange}
			action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
		>
			<Button size="small">上传文件</Button>
		</Upload>
	)
}
```

## 拦截上传

使用 beforeUpload 可以拦截上传

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Upload, Button } from "@xf/x-ui";
import type { UploadFile } from "@xf/x-ui";

export default () => {

	const beforeUpload = (file: UploadFile) => {
		if (file.type !== 'image/png') {
			alert(`${file.name} 不是 png 文件`)
			return false
		}
		return true
	}

	return (
		<Upload
			beforeUpload={beforeUpload}
			action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
		>
			<Button size="small">上传 png 文件</Button>
		</Upload>
	)
}
```

## 拖拽上传

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Upload, Icon } from "@xf/x-ui";

const { Dragger } = Upload

export default () => {

	return (
		<Dragger action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
			<div style={{ textAlign: 'center' }}>
				<p>
					<Icon size="4x" color="#40a9ff" icon="upload" />
				</p>
				<p>点击或者将文件拖放到该区域上传</p>
			</div>
			
		</Dragger>
	)
}
```

<API src="./api/Upload.tsx"></API>

## UploadFile

api 所传递出来的 file 都是 UploadFile 类型

```ts
interface UploadFile {
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
```

## onChange

onChange 事件在上传文件的状态变化时就会被调用：上传、完成、失败、移除

参数包括的内容：
1. file：当前操作的文件对象
2. fileList：当前的文件列表
3. event: progress 事件的 event 对象，包括了上传进度所需的内容