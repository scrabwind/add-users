<script setup lang="ts">
  import Plus from '@/assets/svgs/plus.svg'
</script>

<template>
  <div class="container">
    <inline-svg
      :src="Plus"
      class="icon"
    />
    <div class="text">Add User</div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: $color-green;
    padding: 15px;
    border-radius: 64px;
  }

  .icon {
    fill: $color-white;
    width: 1.6rem;
    height: 1.6rem;
    padding: 0;
  }

  .text {
    color: $color-white;
    white-space: nowrap;
  }
</style>
