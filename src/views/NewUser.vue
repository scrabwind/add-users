<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DefaultLayout from '@/layout/DefaultLayout.vue'
  import InputComponent from '@/components/Input/InputComponent.vue'
  import SubmitComponent from '@/components/Submit/SubmitComponent.vue'
  import { createUser } from '@/common/utils/request.utils'

  const router = useRouter()
  const firstName = ref('')
  const lastName = ref('')
  const avatar = ref('')
  const wasSubmitted = ref(false)

  const handleSubmit = async () => {
    wasSubmitted.value = true
    const data = { firstName, lastName, avatar }

    if (!firstName.value || !lastName.value || !avatar.value) return

    await createUser(data)

    router.push('/')
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
            v-model="firstName"
            label="First Name"
            class="input--xd"
            :class="{ 'input--invalid': !firstName && wasSubmitted }"
          />
          <InputComponent
            id="last"
            v-model="lastName"
            label="Last Name"
            class="input--xd"
            :class="{ 'input--invalid': !lastName && wasSubmitted }"
          />
        </div>
        <div>
          <SubmitComponent class="submit" />
        </div>
      </main>
      <aside class="aside">
        <img
          src="https://curatti.com/wp-content/uploads/2017/05/generic-avatar-image1.png"
          alt="peepoStare"
          class="img"
          width="140"
          height="140"
        />
        <InputComponent
          id="avatar"
          v-model="avatar"
          placeholder="📷Change Photo"
          class="avatar"
          :class="{ 'input--invalid': !avatar && wasSubmitted }"
        />
      </aside>
    </form>
  </DefaultLayout>
</template>

<style scoped lang="scss">
  .header {
    margin: 32px 0;
    font-size: 32px;
  }

  .input {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
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
  }

  .form {
    width: 100%;
    display: flex;
    gap: 64px;
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
  }

  .img {
    overflow: hidden;
    border-radius: 50%;
    background-color: $color-grey;
    border: 3px solid $color-light-grey;
    outline: 1px solid $color-grey;
    margin-bottom: 100px;
  }

  .avatar {
    :deep(.input) {
      border: 1px solid $color-font;
      text-align: center;
    }

    width: 100%;
  }
</style>
