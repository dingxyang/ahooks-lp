---
nav:
  path: /hooks
---

# useUnmount

在组件卸载（unmount）时执行的 Hook。

## 代码演示

<code src="./demo/demo1.tsx" />

### 基础用法

## API

```typescript
useUnmount(fn: () => void);
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |
