<script setup></script>

<template>
  <div class="container">
    <div class="search">Search for users...</div>
    <div class="search-icon">☕</div>
  </div>
</template>

<style scoped lang="scss">
  .search {
    color: $color-grey;
  }

  .container {
    background-color: $color-light-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    gap: 48px;
    width: 25%;
    border-radius: 8px;
    padding: 12px 16px;
  }
</style>
