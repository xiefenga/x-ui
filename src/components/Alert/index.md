---
title: Alert
---

## 基本使用

```tsx
/**
 * background: '#E4EBF5'
 */

import React from "react";
import { Alert } from 'x-ui'

export default () => <Alert message="info Text" />
```

## 显示 icon

```tsx
/**
 * background: '#E4EBF5'
 */

import React from "react";
import { Alert } from 'x-ui'

export default () => <Alert icon="info-circle" message="info Text" />
```


## 可关闭

```tsx
/**
 * background: '#E4EBF5'
 */

import React from "react";
import { Alert } from 'x-ui'

export default () => <Alert icon="info-circle" closeable message="info Text" />
```

<API src="./api/Alert.tsx"></API>