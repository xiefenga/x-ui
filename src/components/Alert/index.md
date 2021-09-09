---
title: Alert
---

## 基本使用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Alert } from 'x-ui'

export default () => <Alert message="warning Text" />
```

## 不同样式

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Alert } from 'x-ui'

export default () => (
  <React.Fragment>
    <Alert type="success" message="success Text" />
    <br />
    <Alert type="info" message="info Text" />
    <br />
    <Alert type="warning" message="warning Text" />
    <br />
    <Alert type="error" message="error Text" />
  </React.Fragment>
)
```

## 显示 icon

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Alert } from 'x-ui'

export default () => <Alert icon="info-circle" message="warning Text" />
```


## 可关闭

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Alert } from 'x-ui'

const style = {margin: '10px 0'}

export default () => (
    <React.Fragment>
    <Alert closeable type="info" message="info Text" />
    <Alert style={style} type="success" message="success Text" />
    <Alert closeable type="warning" message="warning Text" />
    <Alert style={style} type="error" message="error Text" />
  </React.Fragment>
)
```

<API src="./api/Alert.tsx"></API>