---
title: AutoComplete
---

## 基本使用

```tsx
/**
 * background: '#EBF3FA'
 */
import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

export default () => {
  const [options, setOptions] = useState([]);

  const onSearch = (val) => {
    setOptions([
      { label: val, value: val },
      { label: val, value: val },
      { label: val, value: val },
    ]);
  };

  const onSelect = (val, opt) => {
    console.log(val);
    console.log(opt);
  };

  return (
    <AutoComplete onSelect={onSelect} onSearch={onSearch} options={options} />
  );
};
```
