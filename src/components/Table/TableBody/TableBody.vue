<script setup lang="ts">
  import type { User } from '@/common/types/request.types'
  import Delete from '@/assets/svgs/delete.svg'
  import Edit from '@/assets/svgs/edit.svg'

  withDefaults(defineProps<{ users: User[]; avatarSize: number }>(), {
    avatarSize: 32
  })
</script>

<template>
  <tbody class="table-body__wrapper">
    <tr
      v-for="user in users"
      :key="user.id"
    >
      <td class="table-body__avatar-container">
        <img
          :src="user.avatar"
          :width="avatarSize"
          :height="avatarSize"
          alt="avatar"
          class="table-body__avatar"
        />
      </td>
      <td>{{ `${user.first_name} ${user.last_name}` }}</td>
      <td class="table-body__actions">
        <button
          class="table-body__button"
          @click="$router.push(`/${user.id}`)"
        >
          <inline-svg
            class="table-body__svg"
            :src="Edit"
          />
        </button>
        <button
          class="table-body__button"
          @click="$router.push(`/${user.id}`)"
        >
          <inline-svg
            class="table-body__svg"
            :src="Delete"
          />
        </button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss">
  .table-body {
    &__wrapper {
      display: grid;
      grid-row: 2 / -1;
      grid-template-rows: repeat(8, 12.5%);

      :deep(tr:nth-child(odd)) {
        background: $color-grey;
      }
    }

    &__avatar {
      border-radius: 50%;
      overflow: hidden;
      margin-left: 8px;

      &-container {
        width: fit-content;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
    }

    &__button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
      margin-right: 8px;
    }

    &__svg {
      fill: $color-dark-grey;
      width: 1.2rem;
    }
  }
</style>
