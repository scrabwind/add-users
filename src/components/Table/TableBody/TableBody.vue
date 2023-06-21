<script setup lang="ts">
  import type { User } from '@/common/types/request.types'
  import Delete from '@/assets/svgs/delete.svg'
  import Edit from '@/assets/svgs/edit.svg'

  withDefaults(defineProps<{ users: User[]; avatarSize: number }>(), {
    avatarSize: 32
  })
</script>

<template>
  <tbody class="body">
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
        <button class="button">
          <inline-svg
            class="svg"
            :src="Edit"
          />
        </button>
        <button class="button">
          <inline-svg
            class="svg"
            :src="Delete"
          />
        </button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss">
  .body {
    display: grid;
    grid-row: 2 / -1;
    grid-template-rows: repeat(8, 12.5%);

    :deep(tr:nth-child(odd)) {
      background: $color-grey;
    }
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    margin-left: 8px;
  }

  .avatar-container {
    width: fit-content;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  .button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    margin-right: 8px;
  }

  .svg {
    fill: $color-dark-grey;
    width: 1.2rem;
  }
</style>
