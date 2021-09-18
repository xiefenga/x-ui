---
title: Button
group:
  title: 组件
---

## 按钮类型

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { marginLeft: "10px" } };

export default () => (
  <React.Fragment>
    <Button>默认按钮</Button>
    <Button {...style} type="primary">
      primary按钮
    </Button>
    <Button {...style} type="success">
      success按钮
    </Button>
    <Button {...style} type="danger">
      danger按钮
    </Button>
    <Button {...style} type="warning">
      warning按钮
    </Button>
    <Button {...style} type="info">
      info按钮
    </Button>
    <Button {...style} type="link">
      link按钮
    </Button>
  </React.Fragment>
);
```

## 可跳转

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { marginLeft: "10px" } };

export default () => (
   <React.Fragment>
    <Button type="primary" href="https://baidu.com">跳转百度</Button>
    <Button href="https://baidu.com" target="_blank" type="link" {...style}>
      支持 target
    </Button>
  </React.Fragment>
)
```


## disabled 状态

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { marginLeft: "10px" } };

export default () => (
  <React.Fragment>
    <Button disabled>默认按钮</Button>
    <Button {...style} disabled type="primary">
      primary按钮
    </Button>
    <Button {...style} disabled type="success">
      success按钮
    </Button>
    <Button {...style} disabled type="danger">
      danger按钮
    </Button>
    <Button {...style} disabled type="warning">
      warning按钮
    </Button>
    <Button {...style} disabled type="info">
      info按钮
    </Button>
    <Button {...style} disabled type="link">
      link按钮
    </Button>
  </React.Fragment>
);
```

## loading 状态

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { marginLeft: "10px" } };

export default () => (
  <React.Fragment>
    <Button {...style} loading type="primary">
      primary按钮
    </Button>
    <Button {...style} loading type="success">
      success按钮
    </Button>
    <Button {...style} loading type="danger">
      danger按钮
    </Button>
    <Button {...style} loading type="warning">
      warning按钮
    </Button>
    <Button {...style} loading type="info">
      info按钮
    </Button>
    <Button {...style} loading type="link">
      link按钮
    </Button>
  </React.Fragment>
);
```

## 不同尺寸

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { margin: "0 10px" } };

export default () => (
  <React.Fragment>
    <Button size="small" type="primary">
      small按钮
    </Button>
    <Button {...style}>默认尺寸</Button>
    <Button size="large" type="success">
      large按钮
    </Button>
    <Button {...style} shape="round" type="primary">
      圆角按钮
    </Button>
    <Button shape="circle" type="primary">
      圆
    </Button>
  </React.Fragment>
);
```

## block 按钮

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Button } from "@xf/x-ui";

const style = { style: { margin: "10px 0" } };

export default () => (
  <React.Fragment>
    <Button block type="primary">
      block按钮
    </Button>
    <Button {...style} block type="link">
      block按钮
    </Button>
    <Button block>block按钮</Button>
  </React.Fragment>
);
```

<API src="./api/Button.tsx"></API>

Button 组件支持原生 button 的所有属性
