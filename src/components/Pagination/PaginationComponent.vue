<script setup lang="ts">
  import DoubleArrow from '@/assets/svgs/double_arrow.svg'

  withDefaults(defineProps<{ pages: number }>(), { pages: 10 })
</script>

<template>
  <nav class="nav">
    <div class="item item--first">
      <inline-svg
        class="svg svg--left"
        :src="DoubleArrow"
      />
    </div>

    <div
      v-for="page in pages"
      :key="page"
      class="item"
      :class="{ 'item--active': page === 1 }"
    >
      {{ page }}
    </div>
    <div class="item item--last">
      <inline-svg
        class="svg"
        :src="DoubleArrow"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
  $border: 2px solid $color-light-grey;

  .nav {
    display: flex;
    margin-top: 16px;
    margin-bottom: 48px;
    align-items: center;
  }

  .item {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-white;
    color: $color-green;
    border: $border;
    border-left: none;
    font-weight: bold;

    &--first {
      border-left: $border;
      border-radius: 8px 0 0 8px;
      padding: 0;
    }

    &--last {
      border-radius: 0 8px 8px 0;
    }

    &--active {
      background-color: $color-green;
      color: $color-white;
    }
  }

  .svg {
    width: $font-size;
    fill: $color-green;
    stroke: $color-green;
    stroke-width: 3rem;

    &--left {
      rotate: 180deg;
    }
  }
</style>
