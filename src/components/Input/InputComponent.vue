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
  <div class="input__wrapper">
    <label
      v-if="label"
      :for="id"
      class="input__label"
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
  .input {
    margin-top: 12px;
    border: 1px solid $color-light-grey;
    background-color: $color-white;
    padding: 8px 16px;
    height: 32px;

    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__label {
      font-weight: bold;
    }
  }
</style>
