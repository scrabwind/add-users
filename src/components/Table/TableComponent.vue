<script setup lang="ts">
  import { ref } from 'vue'
  import TableHeader from '@/components/Table/TableHeader/TableHeader.vue'
  import TableBody from '@/components/Table/TableBody/TableBody.vue'
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
    grid-template-rows: fit-content(0) repeat(9, 1fr);
    width: 100%;
    flex-grow: 1;
    padding-top: 8px;
  }
</style>
