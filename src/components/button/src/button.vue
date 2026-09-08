<template>
  <button class="lunar-button" :class="buttonClass" :disabled="disabled || loading" :type="nativeType" @click="handleClick">
    <span v-if="loading" class="lunar-button__loading" aria-hidden="true" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'LunarButton' })

const props = withDefaults(defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'large' | 'default' | 'small'
  nativeType?: 'button' | 'submit' | 'reset'
  plain?: boolean
  round?: boolean
  loading?: boolean
  disabled?: boolean
}>(), { type: 'default', size: 'default', nativeType: 'button' })

const emit = defineEmits<{ click: [event: MouseEvent] }>()
const buttonClass = computed(() => [`lunar-button--${props.type}`, props.size !== 'default' ? `lunar-button--${props.size}` : '', { 'is-plain': props.plain, 'is-round': props.round, 'is-loading': props.loading, 'is-disabled': props.disabled }])
function handleClick(event: MouseEvent) { if (props.disabled || props.loading) return; emit('click', event) }
</script>
