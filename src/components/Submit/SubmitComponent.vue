<script setup lang="ts"></script>

<template>
  <input
    type="submit"
    value="Update Details"
    class="submit"
  />
</template>

<style scoped lang="scss">
  .submit {
    width: 144px;

    @media only screen and (width <= $breakpoint2) {
      width: 60%;
      min-width: 144px;
    }
  }
</style>
