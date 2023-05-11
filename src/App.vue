<template>
  <header>
    <RouterView />
  </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import LoginPage from './views/LoginPage.vue'
import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  components: { RouterView },

  data() {
    return {
      validator: false
    }
  }
}
</script>
