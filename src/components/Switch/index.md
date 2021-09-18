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
import React from "react";
import { Switch } from "@xf/x-ui";

export default () => {
  return (
    <React.Fragment>
      <span>选中状态： </span>
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
import React, { useState } from "react";
import { Switch, Button } from "@xf/x-ui";

export default () => {
  const [disabled, setDisabled] = useState(true)

  const toogle = () => setDisabled(!disabled)

  return (
    <React.Fragment>
      <Switch disabled={disabled} />
      <div style={{marginTop: '10px'}}>
        <Button onClick={toogle} size="small">{disabled ? '启用' : '禁用'}</Button>
      </div>
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
import React from "react";
import { Switch } from "@xf/x-ui";

export default () => {
  return (
    <React.Fragment>
      <div>
        <span>选中状态： </span>
        <Switch />
      </div>
      <div>
        <span>选中状态： </span>
        <Switch size="small" />
      </div>
    </React.Fragment>
  )
}
```

## 完全受控

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React, { useState } from "react";
import { Switch } from "@xf/x-ui";
export default () => {
  const [checked, setChecked] = useState(false);

  const toogle = () => setChecked(!checked);

  return (
    <React.Fragment>
      <span>选中状态： </span>
      <Switch checked={checked} onChange={toogle} />
    </React.Fragment>
  )
}
```

<API src="./api/Switch.tsx"></API>