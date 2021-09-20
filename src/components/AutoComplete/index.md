---
title: AutoComplete
---

## 基本使用

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React, { useState } from "react";
import { AutoComplete } from "@windfall/x-ui";

export default () => {
  const [options, setOptions] = useState([]);

  const onSearch = (val) => {
    setOptions([
      { label: val, value: val },
      { label: val.repeat(2), value: val.repeat(2) },
      { label: val.repeat(3), value: val.repeat(3) },
    ]);
  };

  const onSelect = (val, opt) => {
    console.log(val);
    console.log(opt);
  };

  return (
    <AutoComplete placeholder="请输入内容" onSelect={onSelect} onSearch={onSearch} options={options} />
  );
};
```

## 受控模式

```tsx
/**
 * hideActions:
 *  - CSB
 *  - EXTERNAL
 */
import React, { useState } from "react";
import { AutoComplete } from "@windfall/x-ui";

export default () => {
  const [options, setOptions] = useState([]);
  const [val, setVal] = useState('');

  const onSearch = (val) => {
    setOptions([
      { label: val, value: val },
      { label: val.repeat(2), value: val.repeat(2) },
      { label: val.repeat(3), value: val.repeat(3) },
    ]);
  };

  const onSelect = (val, opt) => {
    console.log(val);
    console.log(opt);
  };

  return (
    <AutoComplete placeholder="请输入内容" value={val} onChange={setVal} onSelect={onSelect} onSearch={onSearch} options={options} />
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
import React, { useState } from "react";
import { AutoComplete } from "@windfall/x-ui";

export default () => {
  const value = "aaa"

  const options = [
    { value: "aaa" },
    { value: "bbb" },
    { value: "ccc" },
  ]

  return (
    <AutoComplete value="aaa" disabled options={options} />
  );
};
```


<API src="./api/AutoComplete.tsx"></API>
