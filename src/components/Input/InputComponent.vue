<script setup lang="ts">
  withDefaults(
    defineProps<{
      label?: string
      id: string
      modelValue: string
      placeholder?: string
    }>(),
    { placeholder: '', label: '' }
  )
  defineEmits(['update:modelValue'])
</script>

<template>
  <div class="wrapper">
    <label
      v-if="label"
      :for="id"
      class="label"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :value="modelValue"
      type="text"
      class="input"
      :placeholder="placeholder"
      @input="
        $emit('update:modelValue', ($event?.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-weight: bold;
  }

  .input {
    margin-top: 12px;
    border: 1px solid $color-light-grey;
    background-color: $color-white;
    padding: 8px 16px;
    height: 32px;
  }
</style>
