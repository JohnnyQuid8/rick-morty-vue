<template>
  <HeaderComponent></HeaderComponent>
  <div v-for="(character, index) in favoritesCharacters" :key="index">
    <p>{{ character.name }}</p>
    <p>{{ character.gender }}</p>
    <p>{{ character.id }}</p>

    <img :src="character.image" />
    <button @click="deleteCharacter(index)">DELETE</button>

    <button @click="setCharacter(character)">EDIT</button>
  </div>
  <EditCharacterModal
    :modalVisible="state.selectedCharacter !== null"
    :character="state.selectedCharacter"
  />

  <h1>My Favorites</h1>
</template>

<script lang="ts">
import EditCharacterModal from '../components/EditCharacterModal.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { characterService } from '../modules/characterList/charactesList.service'

// import type { Characters } from '../types/CharactersProps'

import { store } from '../store/store'

export default {
  components: {
    HeaderComponent,
    EditCharacterModal
  },

  name: 'FavoritesPage',

  setup() {
    const state = {
      selectedCharacter: null as null | Object,
      characters: [],
      index: 0,
      validator: true
    }

    const fetchItAll = () => {
      characterService.fetchAllCharacters().then((response) => {
        state.characters = response
      })
    }

    const favoritesCharacters = store.favoritesCharacters
    console.log(favoritesCharacters)
    fetchItAll()

    return {
      state,
      favoritesCharacters
    }
  },
  methods: {
    deleteCharacter(index: number) {
      this.favoritesCharacters.splice(index, 1)
    },
    setCharacter(character: Object) {
      if (character) {
        this.state.selectedCharacter = character
        console.log(character)
      } else {
        this.state.selectedCharacter = null
      }
    }
  }
}
</script>
