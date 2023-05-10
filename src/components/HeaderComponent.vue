<template>
  <div class="header">
    <a @click.prevent="goMain" to="mainpage">LOGO</a>
    <button @click.prevent="logout" to="login" class="logout">LOG OUT</button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',

  setup() {
    const router = useRouter()

    const logout = () => {
      router.push('/logout')
    }
    const goMain = () => {
      router.push('/mainpage')
    }

    return {
      logout,
      goMain
    }
  }
})
</script>
<style scope>
.header {
  width: 100%;
  height: 1.5rem;
  background: gray;
}
.logout {
  position: absolute;
  right: 0;
}
</style>
