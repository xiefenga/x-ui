---
title: Input
---

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
      <br />
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <Input placeholder="输入" defaultValue="aaa" value={value} />
    </React.Fragment>
  );
};
```
