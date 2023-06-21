<script setup lang="ts">
  import SearchComponent from '@/components/Search/SearchComponent.vue'
  import AddUser from '@/components/AddUser/AddUser.vue'

  const tableHeaders = ['', 'Full Name', 'Action']
</script>

<template>
  <thead>
    <tr class="actions">
      <SearchComponent class="search" />
      <AddUser class="add" />
    </tr>
    <tr class="headers">
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
  .headers {
    align-items: center;
    padding: 32px 0 16px;
    border-top: 1px solid $color-grey;
  }

  .actions {
    margin-bottom: 32px;
  }

  .search {
    grid-column: 1 / 3;
  }

  .add {
    grid-column: 3 / -1;
  }
</style>
