<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import DefaultLayout from '@/layout/DefaultLayout.vue'
  import InputComponent from '@/components/Input/InputComponent.vue'
  import SubmitComponent from '@/components/Submit/SubmitComponent.vue'
  import { createUser, getUser, deleteUser } from '@/common/utils/request.utils'
  import type { User } from '@/common/types/request.types'
  import DeleteButton from '@/components/DeleteButton/DeleteButton.vue'

  const router = useRouter()
  const route = useRoute()
  const isActiveUser = ref(false)

  const userData = ref<User>({
    avatar: '',
    email: '',
    first_name: '',
    id: '',
    last_name: ''
  })
  const wasSubmitted = ref(false)

  onBeforeMount(async () => {
    if (!route.params.id) return
    if (Array.isArray(route.params.id)) return

    isActiveUser.value = true
    const user = await getUser(route.params.id)
    userData.value = user
  })

  const handleSubmit = async () => {
    wasSubmitted.value = true

    if (
      !userData.value?.first_name ||
      !userData.value?.last_name ||
      !userData.value?.avatar
    )
      return

    await createUser(userData.value)

    router.push('/')
  }

  const handleDelete = async () => {
    const status = await deleteUser(userData.value.id)

    if (status === 201) router.push('/')
  }
</script>

<template>
  <DefaultLayout>
    <header
      class="user__header"
      style="font-weight: bold"
    >
      {{ isActiveUser ? 'Edit User' : 'Add User' }}
    </header>
    <form
      class="user__form"
      @submit.prevent="handleSubmit"
    >
      <main class="user__main">
        <div class="user__input-wrapper">
          <InputComponent
            id="first"
            v-model="userData.first_name"
            label="First Name"
            class="user__input"
            :class="{
              'user__input--invalid': !userData.first_name && wasSubmitted
            }"
          />
          <InputComponent
            id="last"
            v-model="userData.last_name"
            label="Last Name"
            class="user__input"
            :class="{
              'user__input--invalid': !userData.last_name && wasSubmitted
            }"
          />
        </div>
        <div class="user__buttons-container">
          <SubmitComponent class="user__submit" />
          <DeleteButton
            v-if="isActiveUser"
            @click="handleDelete"
          />
        </div>
      </main>
      <aside class="user__aside">
        <img
          :src="userData.avatar || '@/assets/img/avatar.png'"
          alt="avatar"
          class="user__avatar-img"
          width="140"
          height="140"
        />
        <InputComponent
          id="avatar"
          v-model="userData.avatar"
          placeholder="📷Change Photo"
          class="user__avatar-input"
          :class="{ 'input--invalid': !userData.avatar && wasSubmitted }"
        />
      </aside>
    </form>
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .user {
    &__header {
      margin: 32px 0;
      font-size: 32px;

      @media only screen and (width <= $breakpoint--m) {
        text-align: center;
      }

      @media only screen and (width <= $breakpoint--s) {
        margin-bottom: 0;
      }
    }

    &__input {
      width: 100%;

      &-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;

        @media only screen and (width <= $breakpoint--m) {
          flex-direction: column;
          gap: 24px;
        }
      }

      &--invalid {
        :deep(.input) {
          border: 1px solid $color-red !important;
        }
      }
    }

    &__submit {
      border: none;
      background-color: $color-green;
      color: $color-white;
      border-radius: 4px;
      padding: 16px 24px;
      cursor: pointer;
    }

    &__main {
      width: 70%;
      display: flex;
      flex-direction: column;
      background-color: $color-white;
      padding: 24px;
      height: 400px;
      justify-content: space-between;
      border-radius: 8px;
      box-shadow: 0 0 20px -15px $color-font;

      @media only screen and (width <= $breakpoint--m) {
        height: max-content;
      }

      @media only screen and (width <= $breakpoint--s) {
        width: 100%;
      }
    }

    &__form {
      width: 100%;
      display: flex;
      gap: 64px;

      @media only screen and (width <= $breakpoint--m) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
      }
    }

    &__aside {
      width: 30%;
      height: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: end;
      background-color: $color-white;
      padding: 24px 20px;
      border-radius: 8px;
      box-shadow: 0 0 20px -15px $color-font;

      @media only screen and (width <= $breakpoint--m) {
        height: 240px;
        width: 70%;
      }

      @media only screen and (width <= $breakpoint--s) {
        height: 240px;
        width: 100%;
      }
    }

    &__avatar {
      &-img {
        overflow: hidden;
        border-radius: 50%;
        background-color: $color-grey;
        border: 3px solid $color-light-grey;
        outline: 1px solid $color-grey;
        margin-bottom: 100px;

        @media only screen and (width <= $breakpoint--m) {
          width: 120px;
          height: 120px;
          margin-bottom: 20px;
        }
      }

      &-input {
        :deep(.input) {
          border: 1px solid $color-font;
          text-align: center;
        }

        width: 100%;
      }
    }

    &__buttons-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (width <= $breakpoint--m) {
        margin-top: 64px;
      }

      @media only screen and (width <= $breakpoint--s) {
        flex-direction: column;
        gap: 24px;
      }
    }
  }
</style>
