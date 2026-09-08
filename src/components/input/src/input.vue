<template>
  <div class="lunar-input" :class="inputClass">
    <div class="lunar-input__wrapper">
      <span v-if="$slots.prefix" class="lunar-input__prefix"><slot name="prefix" /></span>
      <input class="lunar-input__inner" :value="modelValue" :type="type" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="isFocus = false" @focus="isFocus = true" @input="handleInput" />
      <span v-if="$slots.suffix" class="lunar-input__suffix"><slot name="suffix" /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'LunarInput' })

const props = withDefaults(defineProps<{ modelValue?: string | number; type?: string; size?: 'large' | 'default' | 'small'; placeholder?: string; disabled?: boolean; readonly?: boolean }>(), { modelValue: '', type: 'text', size: 'default' })
const emit = defineEmits<{ 'update:modelValue': [value: string]; input: [value: string] }>()
const isFocus = ref(false)
const inputClass = computed(() => [props.size !== 'default' ? `lunar-input--${props.size}` : '', { 'is-focus': isFocus.value, 'is-disabled': props.disabled }])
function handleInput(event: Event) { const value = (event.target as HTMLInputElement).value; emit('update:modelValue', value); emit('input', value) }
</script>
