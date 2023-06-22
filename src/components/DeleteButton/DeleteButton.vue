<script setup lang="ts"></script>

<template>
  <button class="delete__button">Delete User</button>
</template>

<style lang="scss">
  .delete {
    &__button {
      width: 144px;
      border: none;
      background-color: red;
      color: $color-white;
      border-radius: 4px;
      padding: 16px 24px;
      cursor: pointer;

      @media only screen and (width <= $breakpoint2) {
        width: 60%;
        min-width: 144px;
      }
    }
  }
</style>
