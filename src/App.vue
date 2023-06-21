<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="scss">
  @use 'normalize.css/normalize.css' as *;
  @import 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';

  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }

  html,
  body {
    float: left;
  }

  #app {
    margin: 0 auto;
    max-width: 1600px;
  }

  body {
    background-color: $color-grey;
  }

  * {
    font-family: 'Open Sans', sans-serif;
    font-size: $font-size;
    color: $color-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
</style>
