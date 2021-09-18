---
title: Loading
group:
  title: 组件
---

## 基础用法

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Loading } from "@xf/x-ui";

export default () => <Loading loading />;
```

## 不同大小

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Loading } from "@xf/x-ui";

export default () => (
  <React.Fragment>
    <Loading loading size="small" />
    <Loading loading />
    <Loading loading size="large" />
  </React.Fragment>
);
```

## 提示文本

可以自定义描述文案

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Loading } from "@xf/x-ui";

export default () => <Loading loading tip="加载中" />;
```

## 将容器变为加载状态

把内容内嵌到 Loading 中，将现有容器变为加载状态

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React, { useState } from "react";
import { Loading, Switch } from "@xf/x-ui";

export default () => {
  const [loading, setLoading] = useState(false);

  const toogle = () => setLoading(!loading);

  return (
    <React.Fragment>
      <div>
        <span>loading: </span>
        <Switch checked={loading} onChange={toogle}/>
      </div>
      <br />
      <Loading loading={loading} tip="加载中">
        <div style={{ border: "1px solid", padding: "10px" }}>
          East-Tec Eraser goes beyond U.S. Department of Defense standards for
          the permanent erasure of digital information and easily removes every
          trace of sensitive data from your computer.
        </div>
      </Loading>
    </React.Fragment>
  );
};
```

<API src="./api/Loading.tsx"></API>
