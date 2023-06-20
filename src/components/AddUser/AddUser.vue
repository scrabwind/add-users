<script setup></script>

<template>
  <div class="container">
    <b class="icon">➕</b>
    <div class="text">Add User</div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    height: fit-content;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: $color-green;
    padding: 15px;
    border-radius: 64px;
  }

  .icon {
    color: transparent;
    text-shadow: 0 0 0 $color-white;
  }

  .text {
    color: $color-white;
  }
</style>
