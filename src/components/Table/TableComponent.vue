<script setup lang="ts">
  import TableHeader from '@/components/Table/TableHeader/TableHeader.vue'
  import TableBody from '@/components/Table/TableBody/TableBody.vue'
</script>

<template>
  <table class="table">
    <TableHeader />
    <TableBody class="body" />
  </table>
</template>

<style scoped lang="scss">
  .table {
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    width: 100%;
    flex-grow: 1;
    border-top: 1px solid $color-light-grey;
    padding-top: 24px;
  }

  .body {
    display: grid;
    grid-row: 2 / -1;
  }

  :deep(tr) {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    text-align: left;
  }
</style>
