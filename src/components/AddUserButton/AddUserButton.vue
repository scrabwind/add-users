<script setup lang="ts">
  import Plus from '@/assets/svgs/plus.svg'
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <button
    class="container"
    @click="router.push('/add-user')"
  >
    <inline-svg
      :src="Plus"
      class="icon"
    />
    <span class="text">Add User</span>
  </button>
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
    border-color: transparent;
    cursor: pointer;
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
