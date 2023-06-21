<script setup lang="ts">
  import DoubleArrow from '@/assets/svgs/double_arrow.svg'

  withDefaults(defineProps<{ pages: number; activePage: number }>(), {
    pages: 10,
    activePage: 1
  })

  defineEmits<{ (e: 'paginationClick', pageNumber: number): void }>()
</script>

<template>
  <nav class="nav">
    <button
      class="item item--first"
      @click="$emit('paginationClick', 1)"
    >
      <inline-svg
        class="svg svg--left"
        :src="DoubleArrow"
      />
    </button>
    <button
      v-for="page in pages"
      :key="page"
      class="item"
      :class="{ 'item--active': page === activePage }"
      @click="$emit('paginationClick', page)"
    >
      {{ page }}
    </button>
    <button
      class="item item--last"
      @click="$emit('paginationClick', pages)"
    >
      <inline-svg
        class="svg"
        :src="DoubleArrow"
      />
    </button>
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
    cursor: pointer;

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
      border: none;
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
