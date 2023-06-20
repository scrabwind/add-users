<script setup>
  import DefaultLayout from '@/layout/Default.vue'
  import Table from '@/components/Table/Table.vue'
</script>

<template>
  <DefaultLayout>
    <h1 class="header">User list</h1>
    <Table class="table" />
  </DefaultLayout>
</template>

<style scoped>
  .header {
    margin: 32px 0;
  }

  .table {
    width: 100%;
    height: 100%;

    /* float: left; */
  }
</style>
