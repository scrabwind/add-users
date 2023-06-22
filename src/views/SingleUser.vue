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
      class="header"
      style="font-weight: bold"
    >
      Add User
    </header>
    <form
      class="form"
      @submit.prevent="handleSubmit"
    >
      <main class="main">
        <div class="input__wrapper">
          <InputComponent
            id="first"
            v-model="userData.first_name"
            label="First Name"
            class="input--xd"
            :class="{ 'input--invalid': !userData.first_name && wasSubmitted }"
          />
          <InputComponent
            id="last"
            v-model="userData.last_name"
            label="Last Name"
            class="input--xd"
            :class="{ 'input--invalid': !userData.last_name && wasSubmitted }"
          />
        </div>
        <div class="buttons--container">
          <SubmitComponent class="submit" />
          <DeleteButton
            v-if="isActiveUser"
            @click="handleDelete"
          />
        </div>
      </main>
      <aside class="aside">
        <img
          :src="
            userData.avatar ||
            'https://curatti.com/wp-content/uploads/2017/05/generic-avatar-image1.png'
          "
          alt="peepoStare"
          class="img"
          width="140"
          height="140"
        />
        <InputComponent
          id="avatar"
          v-model="userData.avatar"
          placeholder="📷Change Photo"
          class="avatar"
          :class="{ 'input--invalid': !userData.avatar && wasSubmitted }"
        />
      </aside>
    </form>
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .header {
    margin: 32px 0;
    font-size: 32px;

    @media only screen and (width <= $breakpoint) {
      text-align: center;
    }

    @media only screen and (width <= $breakpoint2) {
      margin-bottom: 0;
    }
  }

  .input {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;

      @media only screen and (width <= $breakpoint) {
        flex-direction: column;
        gap: 24px;
      }
    }

    &--xd {
      width: 100%;
    }

    &--invalid {
      :deep(.input) {
        border: 1px solid red !important;
      }
    }
  }

  .submit {
    border: none;
    background-color: $color-green;
    color: $color-white;
    border-radius: 4px;
    padding: 16px 24px;
  }

  .main {
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    padding: 24px;
    height: 400px;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 0 20px -15px $color-font;

    @media only screen and (width <= $breakpoint) {
      height: max-content;
    }

    @media only screen and (width <= $breakpoint2) {
      width: 100%;
    }
  }

  .form {
    width: 100%;
    display: flex;
    gap: 64px;

    @media only screen and (width <= $breakpoint) {
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .aside {
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

    @media only screen and (width <= $breakpoint) {
      height: 240px;
      width: 70%;
    }

    @media only screen and (width <= $breakpoint2) {
      height: 240px;
      width: 100%;
    }
  }

  .img {
    overflow: hidden;
    border-radius: 50%;
    background-color: $color-grey;
    border: 3px solid $color-light-grey;
    outline: 1px solid $color-grey;
    margin-bottom: 100px;

    @media only screen and (width <= $breakpoint) {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }
  }

  .avatar {
    :deep(.input) {
      border: 1px solid $color-font;
      text-align: center;
    }

    width: 100%;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .buttons--container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (width <= $breakpoint) {
      margin-top: 64px;
    }

    @media only screen and (width <= $breakpoint2) {
      flex-direction: column;
      gap: 24px;
    }
  }
</style>
