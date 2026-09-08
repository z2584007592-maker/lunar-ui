# Card 卡片

将信息聚合在容器中展示。

## 基础用法

<lunar-card header="卡片标题" style="max-width: 360px;">
  这里是卡片内容。
  <template #footer>底部内容</template>
</lunar-card>

## 阴影

<lunar-card header="Hover shadow" shadow="hover" style="max-width: 360px;">鼠标悬浮时展示阴影。</lunar-card>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 头部文本 | `string` | `''` |
| shadow | 阴影显示时机 | `always / hover / never` | `always` |
| bodyStyle | body 自定义样式 | `CSSProperties` | `{}` |
