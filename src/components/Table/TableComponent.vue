<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import TableHeader from '@/components/Table/TableHeader/TableHeader.vue'
  import TableBody from '@/components/Table/TableBody/TableBody.vue'

  import { getUsersRepsonse } from '@/common/utils/request.utils'
  import type { User } from '@/common/types/request.types'

  const avatarSize = ref(48)

  defineProps<{ users: User[] }>()
</script>

<template>
  <table class="table">
    <TableHeader />
    <TableBody
      :users="users"
      :avatar-size="avatarSize"
    />
  </table>
</template>

<style scoped lang="scss">
  .table {
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    width: 100%;
    flex-grow: 1;
    border-top: 1px solid $color-grey;
    padding-top: 24px;
  }

  :deep(tr) {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: max(80px, 10%) 1fr max(64px, 10%);
    text-align: left;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
</style>
