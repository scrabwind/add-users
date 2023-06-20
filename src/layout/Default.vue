<template>
  <main class="main">
    <slot />
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
  .main {
    display: grid;
    width: 100%;
    grid-template-rows: 100px 1fr;
    max-width: 1600px;

    // margin: 0 auto;
    padding: 64px;
    height: 100%;

    // float: left;
  }
</style>
