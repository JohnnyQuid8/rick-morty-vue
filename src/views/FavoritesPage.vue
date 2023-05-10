<template>
  <HeaderComponent></HeaderComponent>
  <div v-for="(character, index) in favoritesCharacters" :key="index">
    <p>{{ character[0] }}</p>
    <p>{{ character[1] }}</p>
    <p>{{ character[2] }}</p>
    <img :src="character[3]" />
    <button @click="deleteCharacter(index)">DELETE</button>

    <button @click="setCharacter(character)">EDIT</button>
    <EditCharacterModal v-if="state.selectedCharacter" :character="state.selectedCharacter" />
  </div>

  <h1>My Favorites</h1>
</template>

<script>
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
      selectedCharacter: null,
      characters: [],
      index: 0
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
    deleteCharacter(index) {
      this.favoritesCharacters.splice(index, 1)
    },
    setCharacter(character) {
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
