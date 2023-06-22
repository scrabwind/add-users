<script setup lang="ts">
  const tableHeaders = ['', 'Full Name', 'Action']
</script>

<template>
  <thead class="table-head">
    <tr class="table-head__headers">
      <th
        v-for="header in tableHeaders"
        :key="header"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
  .table-head {
    grid-row: 1 / 2;

    &__headers {
      align-items: center;
      padding: 32px 0 16px;
      border-top: 1px solid $color-grey;
      text-align: left;
    }
  }
</style>
