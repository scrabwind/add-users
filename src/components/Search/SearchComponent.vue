<script setup lang="ts">
  import Search from '@/assets/svgs/search.svg'
</script>

<template>
  <div class="container">
    <div class="search">Search for users...</div>
    <inline-svg
      :src="Search"
      class="search-icon"
    />
  </div>
</template>

<style scoped lang="scss">
  .search {
    color: $color-font;

    &-icon {
      width: 1.3rem;
      height: 1.3rem;
      fill: $color-dark-grey;
    }
  }

  .container {
    background-color: $color-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    gap: 48px;
    width: max(220px, 25%);
    border-radius: 8px;
    padding: 12px 16px;
  }
</style>
