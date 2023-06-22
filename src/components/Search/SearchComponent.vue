<script setup lang="ts">
  import Search from '@/assets/svgs/search.svg'
  import { ref } from 'vue'

  const search = ref('')
</script>

<template>
  <label
    for="text"
    class="search__wrapper"
  >
    <input
      id="text"
      v-model="search"
      type="text"
      class="search__input"
      placeholder="Search for users..."
    />
    <inline-svg
      :src="Search"
      class="search__icon"
    />
  </label>
</template>

<style scoped lang="scss">
  .search {
    &__wrapper {
      background-color: $color-grey;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: max(220px, 25%);
      border-radius: 8px;
      margin-left: 0;

      @media only screen and (width <= $breakpoint--s) {
        width: 100%;
        margin-left: 12px;
        margin-right: 0;
      }
    }

    &__input {
      color: $color-font;
      border: none;
      background-color: transparent;
      margin: 12px 16px;
      outline: none;
      width: 100%;
    }

    &__icon {
      width: 1.3rem;
      height: 1.3rem;
      fill: $color-dark-grey;
      margin-right: 16px;
    }
  }
</style>
