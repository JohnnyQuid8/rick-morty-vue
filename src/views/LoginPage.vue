<template>
  <div class="login">
    <AntForm @submit.prevent="validate" class="login__form">
      <div class="login__form--field">
        <label>USERNAME</label>
        <AntInput type="text" v-model="username" @input="getUserName" />
      </div>
      <div class="login__form--field">
        <label>PASSWORD</label>
        <AntInput type="password" v-model="password" @input="getPassword" />
      </div>
      <AntButton class="login__form--button" htmlType="submit">LOG IN</AntButton>
    </AntForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form as AntForm, Input as AntInput, Button as AntButton } from 'ant-design-vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    AntForm,
    AntInput,
    AntButton
  },

  setup() {
    // Todo: type as much of the app possible 
    const state = {
      username: '' as string,
      password: '' as string | number,
      DUMMY_USERNAME: 'FWW' as string,
      DUMMY_PASSWORD: '123' as string,
      login: false as boolean
    }

    return state
  },

  methods: {
    getUserName(event: Event) {
      this.username = event.target.value
    },
    getPassword(event: Event) {
      this.password = event.target.value
    },
    validate() {
      if (this.username === this.DUMMY_USERNAME && this.password === this.DUMMY_PASSWORD) {
        this.$router.push('/mainpage')
      } else {
        alert('WRONG PASSWORD')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins';
@import '@/styles/variables';

.login {
  width: 100%;
  height: 100vh;
  background-color: $light-gray;
  @include flex-center;

  &__form {
    background: $dark-gray;
    padding: 1.2rem 2rem;
    @include flex-center;
    flex-direction: column;
    width: 100%;
    height: 20vh;
    gap: 1rem;

    @media only screen and (min-width: 600px) {
      width: 50%;
    }
    @media only screen and (min-width: 1400px) {
      width: 100%;
    }
    &--field {
      border-radius: 0;
    }
    &--button {
      background-color: $light-gray;
      width: 50%;
      margin: auto;
    }
  }
}
</style>
