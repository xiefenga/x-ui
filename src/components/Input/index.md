---
title: Input
---

## 不同大小

```tsx
/**
 * background: '#EBF3FA'
 */

import React from "react";
import { Input } from "x-ui";

export default () => (
  <React.Fragment>
    <Input size="small" />
    <br />
    <Input />
    <br />
    <Input size="large" />
  </React.Fragment>
);
```

## 受控和非受控

```tsx
/**
 * background: '#EBF3FA'
 */

import { Input } from "x-ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <Input defaultValue="aaa" />
      <br />
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </React.Fragment>
  );
};
```

## 禁用

```tsx
/**
 * background: '#EBF3FA'
 */

import { Input } from "x-ui";
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
 * background: '#EBF3FA'
 */

import { Input } from "x-ui";
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
