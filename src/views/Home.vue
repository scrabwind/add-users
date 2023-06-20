<script setup>
  import DefaultLayout from '@/layout/Default.vue'
  import TableComponent from '@/components/Table/TableComponent.vue'
  import SearchComponent from '@/components/Search/SearchComponent.vue'
  import AddUser from '@/components/AddUser/AddUser.vue'
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
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .header {
    margin: 32px 0;
    font-size: 32px;
  }

  .main {
    padding: 24px 16px;
    display: flex;
    background-color: $color-white;
  }

  .section {
    &-search {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
