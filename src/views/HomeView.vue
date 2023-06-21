<script setup lang="ts">
  import DefaultLayout from '@/layout/DefaultLayout.vue'
  import TableComponent from '@/components/Table/TableComponent.vue'
  import SearchComponent from '@/components/Search/SearchComponent.vue'
  import AddUser from '@/components/AddUser/AddUser.vue'

  import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
</script>

<template>
  <DefaultLayout>
    <header class="header">User list</header>
    <main class="main">
      <section class="section-search">
        <SearchComponent />
        <AddUser />
      </section>
      <TableComponent />
    </main>
    <PaginationComponent />
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .header {
    margin: 32px 0;
    font-size: 32px;
  }

  .main {
    // margin: 32px 0;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
  }

  .section {
    &-search {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 24px;
    }
  }
</style>
