<script setup lang="ts">
  import DefaultLayout from '@/layout/DefaultLayout.vue'
  import TableComponent from '@/components/Table/TableComponent.vue'

  import PaginationComponent from '@/components/Pagination/PaginationComponent.vue'
  import type { User } from '@/common/types/request.types'
  import { getUsersRepsonse } from '@/common/utils/request.utils'
  import { ref, onBeforeMount } from 'vue'

  const users = ref<User[]>([])
  const pages = ref<number>(0)
  const activePage = ref<number>(1)

  const paginationClick = async (page = 1): Promise<void> => {
    const response = await getUsersRepsonse(page)

    users.value = response.data
    pages.value = response.total_pages
    activePage.value = page
  }

  onBeforeMount(async () => {
    await paginationClick()
  })
</script>

<template>
  <DefaultLayout>
    <header class="header">User list</header>
    <main class="main">
      <TableComponent :users="users" />
    </main>
    <PaginationComponent
      :pages="pages"
      :active-page="activePage"
      @pagination-click="paginationClick"
    />
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
    flex-direction: column;
    background-color: $color-white;
    box-shadow: 0 0 20px -15px $color-font;
  }
</style>
