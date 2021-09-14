---
title: Menu
---

## 横向菜单

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from 'react'
import { Menu } from 'x-ui'

export default () => {
	return (
		<Menu defaultSelectedKeys={['key1']}>
			<Menu.Item key="key1">
				菜单项1
			</Menu.Item>
			<Menu.Item>
				菜单项2
			</Menu.Item>
			<Menu.SubMenu title="子菜单">
				<Menu.Item>
				菜单项1
				</Menu.Item>
				<Menu.Item>
				菜单项2
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item disabled>
				菜单项3
			</Menu.Item>
		</Menu>
	)
}
```

## 纵向菜单

```tsx

import React from 'react'
import { Menu } from 'x-ui'

export default () => {
	return (
		<Menu defaultOpenKeys={['sub']} defaultSelectedKeys={['sub-ke1']} mode="vertical">
			<Menu.Item >
				菜单项1
			</Menu.Item>
			<Menu.Item disabled>
				菜单项2
			</Menu.Item>
			<Menu.SubMenu key="sub" title="子菜单">
				<Menu.Item key="sub-ke1">
				菜单项1
				</Menu.Item>
				<Menu.Item>
				菜单项2
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item>
				菜单项3
			</Menu.Item>
		</Menu>
	)
}
```

## 完全受控

通过 selectedKeys 和 openKeys 可以使得组件完全受控

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import { Menu } from 'x-ui'
import React, { useState } from 'react'

export default () => {
	const [selected, setSelected] = useState<string[]>(['key1'])
	return (
		<Menu selectedKeys={selected} onSelect={key => setSelected([key])}>
			<Menu.Item key="key1">
				菜单项1
			</Menu.Item>
			<Menu.Item>
				菜单项2
			</Menu.Item>
			<Menu.SubMenu title="子菜单">
				<Menu.Item>
				菜单项1
				</Menu.Item>
				<Menu.Item>
				菜单项2
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Item disabled>
				菜单项3
			</Menu.Item>
		</Menu>
	)
}
```

<API src="./api/Menu.tsx" />
Menu 组件的属性

<API src="./api/MenuItem.tsx" />
Menu.Item 组件的属性

<API src="./api/SubMenu.tsx" />
Menu.SubMenu 组件的属性