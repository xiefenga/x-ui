---
title: Tab
---

## 基本使用

```tsx
/**
 * background: '#E4EBF5'
 */

import React from "react";
import { Tab } from "x-ui";

const { TabPane } = Tab;

export default () => (
  <Tab>
    <TabPane tab="tab 1">tab 1</TabPane>
    <TabPane tab="tab 2">tab 2</TabPane>
    <TabPane tab="tab 3">tab 3</TabPane>
    <TabPane tab="tab 4">tab 4</TabPane>
    <TabPane tab="tab 5">tab 5</TabPane>
  </Tab>
);
```

## 受控

```tsx
/**
 * background: '#E4EBF5'
 */

import React, { useState } from "react";
import { Tab } from "x-ui";

const { TabPane } = Tab;

export default () => {
  const [active, setActive] = useState("tab 1");

  return (
    <Tab activeKey={active} onChange={(key) => setActive(key)}>
      <TabPane key="tab 1" tab="tab 1">
        tab 1
      </TabPane>
      <TabPane key="tab 2" tab="tab 2">
        tab 2
      </TabPane>
      <TabPane key="tab 3" tab="tab 3">
        tab 3
      </TabPane>
      <TabPane key="tab 4" tab="tab 4">
        tab 4
      </TabPane>
      <TabPane key="tab 5" tab="tab 5">
        tab 5
      </TabPane>
    </Tab>
  );
};
```

## 禁用

```tsx
/**
 * background: '#E4EBF5'
 */
import React, { useState } from "react";
import { Tab } from "x-ui";

const { TabPane } = Tab;

export default () => {
  const [active, setActive] = useState("tab 1");

  return (
    <Tab activeKey={active} onChange={(key) => setActive(key)}>
      <TabPane key="tab 1" tab="tab 1">
        tab 1
      </TabPane>
      <TabPane disabled key="tab 2" tab="tab 2">
        tab 2
      </TabPane>
      <TabPane key="tab 3" tab="tab 3">
        tab 3
      </TabPane>
      <TabPane key="tab 4" tab="tab 4">
        tab 4
      </TabPane>
      <TabPane key="tab 5" tab="tab 5">
        tab 5
      </TabPane>
    </Tab>
  );
};
```

<API hideTitle src="./api/Tab.tsx"></API>
Tab 属性

<API hideTitle src="./api/TabPane.tsx"></API>
Tab.TabPane 属性
