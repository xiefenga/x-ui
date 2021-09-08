---
title: Switch
---

## 基本使用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from 'react'
import { Switch } from 'x-ui'

export default () => {
  return (
    <React.Fragment>
      <Switch />
    </React.Fragment>
  )
}
```

## 禁用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from 'react'
import { Switch } from 'x-ui'

export default () => {
  return (
    <React.Fragment>
      <Switch disabled />
    </React.Fragment>
  )
}
```

## 不同大小

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from 'react'
import { Switch } from 'x-ui'

export default () => {
  return (
    <React.Fragment>
      <Switch />
      <Switch size="small" />
    </React.Fragment>
  )
}
```

<API src="./api/Switch.tsx"></API>