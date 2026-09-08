<template>
  <section class="lunar-card" :class="cardClass">
    <div v-if="$slots.header || header" class="lunar-card__header"><slot name="header">{{ header }}</slot></div>
    <div class="lunar-card__body" :style="bodyStyle"><slot /></div>
    <div v-if="$slots.footer" class="lunar-card__footer"><slot name="footer" /></div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

defineOptions({ name: 'LunarCard' })
const props = withDefaults(defineProps<{ header?: string; shadow?: 'always' | 'hover' | 'never'; bodyStyle?: CSSProperties }>(), { shadow: 'always' })
const cardClass = computed(() => [`is-shadow-${props.shadow}`])
</script>
