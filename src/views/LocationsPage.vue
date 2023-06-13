<template>
  <div class="container">
    <div class="logo-box" @click="goMain">
      <img src="../assets/images/logo.webp" class="logo-img" />
    </div>

    <div class="header">
      <p>Location name: {{ state.locationName }}</p>
      <p>Dimension: {{ state.dimension }}</p>
      <p>Locations: {{ state.locations.length }}</p>
    </div>
    <div class="locations-input">
      <p>Pick Location</p>
      <select v-model="state.location" @change="updateLocation">
        <option v-for="(location, index) in state.locations" :key="index" :value="location.id">
          Location - {{ location.id }}
        </option>
      </select>
    </div>

    <div class="character-list">
      <CharacterList :characters="state.characters" :location="state.locationName" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { characterService } from '../modules/characterList/charactesList.service'
import CharacterList from '../components/CharacterList.vue'
import type ICharacter from '../modules/characterList/characters.types'
import { locationsService } from '@/modules/locationsList/locationsList.service'
import type ILocations from '../modules/locationsList/locations.type'
import { useRouter } from 'vue-router'

interface ILocationsPageProps {
  characters: ICharacter[]
  selectedCharacter: ICharacter | null
  locations: ILocations[]
  location: string
  locationName: string
  dimension: string
}

export default defineComponent({
  name: 'LocationsPage',

  components: {
    CharacterList
  },

  setup() {
    const state = reactive<ILocationsPageProps>({
      characters: [] as ICharacter[],
      selectedCharacter: null as null | ICharacter,
      locations: [],
      location: '',
      locationName: '',
      dimension: ''
    })

    const router = useRouter()

    const goMain = () => {
      router.push('/mainpage')
    }

    const fetchAllCharacters = (): void => {
      characterService.fetchAllCharacters().then((response) => {
        console.log(response)
        state.characters = response
      })
    }

    fetchAllCharacters()

    const fetchAllLocations = (): void => {
      locationsService.fetchAllLocations().then((response) => {
        console.log(response)
        state.locations = response
      })
    }
    fetchAllLocations()

    const updateLocation = (): void => {
      const selectedLocation = state.locations.find((location) => location.id === state.location)
      if (selectedLocation) {
        state.locationName = selectedLocation.name
        state.dimension = selectedLocation.dimension
      }
    }

    return {
      state,
      updateLocation,
      goMain
    }
  },
  methods: {}
})
</script>
<style scoped>
.container {
  display: flex;
  overflow: auto;
  height: 100vh;
}
.logo-box {
  position: absolute;
  top: 15%;
  left: 50%;
  z-index: 999999999;
  overflow: hidden;
  width: 22%;
  transform: translate(-50%, -50%);
}

.logo-img {
  width: 100%;
  height: 100%;
}

.header {
  width: 70%;
  background-color: rgb(243 244 246);
  border-radius: 0.5rem;
  height: 5%;
  position: absolute;
  top: 25%;
  margin-left: 13%;
  margin-right: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.locations-input {
  background-color: rgb(243 244 246);
  width: 17%;
  height: 10%;
  border-radius: 0.5rem;
  position: absolute;
  top: 35%;
  padding: 0.5rem;
  margin-left: 13%;
}
.character-list {
  position: absolute;
  top: 35%;
  left: 20%;
  margin-left: 13%;
  margin-right: 13%;
  overflow: hidden;
}
select {
  width: 100%;
  height: 50%;
  border-radius: 0.5rem;
  margin-top: 0.7rem;
  background-color: white;
  border: 0.01rem solid gray;
}
</style>
