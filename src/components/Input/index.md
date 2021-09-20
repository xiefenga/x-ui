---
title: Input
---

## 不同大小

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React from "react";
import { Input } from "@crush/x-ui";

export default () => (
  <React.Fragment>
    <Input placeholder="请输入内容" size="small" />
    <br />
    <Input placeholder="请输入内容" />
    <br />
    <Input placeholder="请输入内容" size="large" />
  </React.Fragment>
);
```

## 受控和非受控

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import { Input } from "@crush/x-ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <Input placeholder="请输入内容" defaultValue="aaa" />
      <br />
      <Input placeholder="请输入内容" value={value} onChange={(e) => setValue(e.target.value)} />
    </React.Fragment>
  );
};
```

## 禁用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import { Input } from "@crush/x-ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Input disabled size="large" value="large禁用" />
      <br />
      <Input disabled value="被禁用了" />
      <br />
      <Input disabled size="small" value="small禁用" />
    </React.Fragment>
  );
};
```

## 带移除图标

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import { Input } from "@crush/x-ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("受控状态");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Input allowClear placeholder="请输入内容" />
      <br />
      <Input allowClear value="无法改变，无法清空" />
      <br />
      <Input
        allowClear
        onChange={onChange}
        value={value}
        placeholder="请输入内容"
      />
    </React.Fragment>
  );
};
```

<API src="./api/Input.tsx"></API>

Input 组件支持原生 input 的所有属性