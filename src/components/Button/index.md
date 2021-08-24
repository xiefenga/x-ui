---
title: Button
group:
  title: 组件
---

## 按钮类型

```tsx
import React from "react";
import { Button } from "x-ui";

export default () => (
  <React.Fragment>
    <Button>默认按钮</Button>
    <Button type="primary">primary按钮</Button>
    <Button type="danger">danger按钮</Button>
    <Button type="warning">warning按钮</Button>
    <Button type="link">link按钮</Button>
  </React.Fragment>
);
```

<API src="./api/Button.tsx"></API>
