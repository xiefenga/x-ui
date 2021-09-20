---
title: Icon
---

## 基本使用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Icon } from "@crush/x-ui";

const style = { marginRight: "10px" };

export default () => (
  <React.Fragment>
    <span className="cell" style={style}>
      <Icon icon="coffee" />
    </span>

    <span className="cell" style={style}>
      <Icon icon={["fas", "check-circle"]} />
    </span>

    <span className="cell" style={style}>
      <Icon icon={["fab", "github"]} />
    </span>

    <span className="cell" style={style}>
      <Icon icon={["far", "bell"]} />
    </span>
  </React.Fragment>
);
```

## 支持主题色

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Icon } from "@crush/x-ui";

const style = { marginRight: "10px" };

export default () => (
  <React.Fragment>
    <span className="cell" style={style}>
      <Icon theme="primary" icon="coffee" />
    </span>

    <span className="cell" style={style}>
      <Icon theme="success" icon={["fas", "check-circle"]} />
    </span>

    <span className="cell" style={style}>
      <Icon theme="dark" icon={["fab", "github"]} />
    </span>

    <span className="cell" style={style}>
      <Icon theme="warning" icon={["far", "bell"]} />
    </span>
  </React.Fragment>
);
```

## 旋转

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Icon } from "@crush/x-ui";

const style = { marginRight: "10px" };

export default () => (
  <React.Fragment>
    <span className="cell" style={style}>
      <Icon icon="spinner" spin />
    </span>

    <span className="cell" style={style}>
      <Icon icon="spinner" pulse />
    </span>
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
import { Icon } from "@crush/x-ui";

const style = { marginRight: "10px" };

export default () => (
  <React.Fragment>
    <span className="cell" style={style}>
      <Icon size="lg" icon="coffee" />
    </span>

    <span className="cell" style={style}>
      <Icon size="sm" icon="coffee" />
    </span>

    <span className="cell" style={style}>
      <Icon size="xs" icon="coffee" />
    </span>

    <span className="cell" style={style}>
      <Icon size="10x" icon="coffee" />
    </span>
    <span className="cell" style={style}>
      <Icon size="1x" icon="coffee" />
    </span>
  </React.Fragment>
);
```

<API src="./api/Icon.tsx"></API>

Icon 组件支持 FontAwesomeIcon 组件的所有属性
