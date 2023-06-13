<template>
  <div class="logo-box"><img src="../assets/images/logo.webp" class="logo-img" /></div>

  <div class="container">
    <div class="characters" @click.prevent="goCharacters">
      <h2 class="characters-header">Characters</h2>
      <img src="../assets/images/charactersImg.jpg" class="characters-img" />
    </div>
    <div class="bottom-half">
      <div class="episodes" @click.prevent="goEpisodes" to="episodes">
        <h2 class="episodes-header">Episodes</h2>
        <img src="../assets/images/episodesImg.jpg" class="episodes-img" />
      </div>
      <div class="locations" @click.prevent="goLocations" to="locations">
        <h2 class="locations-header">Locations</h2>
        <img src="../assets/images/locationsImg.jpg" class="locations-img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainPage',

  setup() {
    const router = useRouter()

    const goLocations = () => {
      router.push('/locations')
    }

    const goEpisodes = () => {
      router.push('/episodes')
    }

    const goCharacters = () => {
      router.push('/characters')
    }
    return {
      goLocations,
      goEpisodes,
      goCharacters
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixins';
@import '@/styles/variables';

@keyframes scale {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }
}
@keyframes scaleDown {
  0% {
    -webkit-transform: scale(1.25);

    transform: scale(1.25);
  }

  100% {
    -webkit-transform: scale(1);

    transform: scale(1);
  }
}
.logo-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999999999;
  overflow: hidden;
  width: 25%;
  transform: translate(-50%, -50%);
}

.logo-img {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
.characters-header {
  position: fixed;
  top: 25%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  z-index: 5;
}
.episodes-header {
  position: fixed;
  top: 75%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  z-index: 5;
}
.locations-header {
  position: fixed;
  top: 75%;
  right: 18%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  z-index: 5;
}
.characters {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.bottom-half {
  height: 50vh;
  display: flex;
  overflow: hidden;
}

.episodes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.locations {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.characters-img {
  filter: brightness(0.2);
  animation: scaleDown 0.4s linear;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100vh;
  padding-top: 10rem;
  transition: all 0.4s linear;
}
.characters-img:hover {
  filter: brightness(0.7);

  animation: scale 0.4s linear;
  animation-fill-mode: forwards;
}
.episodes-img {
  filter: brightness(0.2);

  animation: scaleDown 0.4s linear;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
}
.episodes-img:hover {
  filter: brightness(0.7);

  animation: scale 0.4s linear;
  animation-fill-mode: forwards;
  overflow: hidden;
}
.locations-img {
  filter: brightness(0.2);

  animation: scaleDown 0.4s linear;
  animation-fill-mode: forwards;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.locations-img:hover {
  filter: brightness(0.7);

  overflow: hidden;
  animation: scale 0.4s linear;
  animation-fill-mode: forwards;
}
</style>
