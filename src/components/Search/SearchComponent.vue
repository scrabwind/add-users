<script setup lang="ts">
  import Search from '@/assets/svgs/search.svg'
  import { ref } from 'vue'

  const search = ref('')
</script>

<template>
  <label
    for="text"
    class="container"
  >
    <input
      id="text"
      v-model="search"
      type="text"
      class="search"
      placeholder="Search for users..."
    />
    <inline-svg
      :src="Search"
      class="search-icon"
    />
  </label>
</template>

<style scoped lang="scss">
  .search {
    color: $color-font;
    border: none;
    background-color: transparent;
    margin: 12px 16px;
    outline: none;
    width: 100%;

    &-icon {
      width: 1.3rem;
      height: 1.3rem;
      fill: $color-dark-grey;
      margin-right: 16px;
    }
  }

  .container {
    background-color: $color-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max(220px, 25%);
    border-radius: 8px;
  }
</style>
