<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .layout {
    display: grid;
    width: 100%;
    grid-template-rows: 100px 1fr;
    max-width: 1600px;
    padding: 0 64px;
    height: 100%;

    @media only screen and (width <= $breakpoint--xs) {
      padding: 0 32px;
    }
  }
</style>
