# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<lunar-input v-model="value" placeholder="请输入内容" />

当前值：{{ value || '空' }}

## 禁用

<lunar-input disabled placeholder="禁用状态" />

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `string / number` | `''` |
| type | 原生 input 类型 | `string` | `text` |
| size | 输入框尺寸 | `large / default / small` | `default` |
| placeholder | 占位文本 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
