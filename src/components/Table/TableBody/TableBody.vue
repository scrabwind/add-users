<script setup lang="ts">
  import type { User } from '@/common/types/request.types'

  withDefaults(defineProps<{ users: User[]; avatarSize: number }>(), {
    avatarSize: 32
  })
</script>

<template>
  <tbody>
    <tr
      v-for="user in users"
      :key="user.id"
    >
      <td class="avatar-container">
        <img
          :src="user.avatar"
          :width="avatarSize"
          :height="avatarSize"
          alt="avatar"
          class="avatar"
        />
      </td>
      <td>{{ `${user.first_name} ${user.last_name}` }}</td>
      <td class="actions">
        <div>🐸</div>
        <div>💀</div>
      </td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss">
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    margin: 8px;
  }

  .avatar-container {
    width: fit-content;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
