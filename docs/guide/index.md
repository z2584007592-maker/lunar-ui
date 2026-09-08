# 快速开始

## 安装

```bash
npm install @your-scope/lunar-ui
```

## 完整引入

```ts
import { createApp } from 'vue'
import LunarUI from '@your-scope/lunar-ui'
import '@your-scope/lunar-ui/dist/style.css'

createApp(App).use(LunarUI).mount('#app')
```

## 按需引入

```vue
<script setup lang="ts">
import { LunarButton } from '@your-scope/lunar-ui'
</script>
<template><lunar-button type="primary">提交</lunar-button></template>
```
