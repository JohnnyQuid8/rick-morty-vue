<template>
  <HeaderComponent></HeaderComponent>
  <!-- Todo:
  Should have a reusable chracter list component for this and main page -->
  <CharacterList :characters="favoritesCharacters" />

  <button @click="deleteCharacter(index)">DELETE</button>

  <button @click="setCharacter(character)">EDIT</button>
  <EditCharacterModal :character="state.selectedCharacter" />

  <h1>My Favorites</h1>
</template>

<script lang="ts">
import EditCharacterModal from '../components/EditCharacterModal.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { characterService } from '../modules/characterList/charactesList.service'
import CharacterList from '../components/CharacterList.vue'

// import type { Characters } from '../types/CharactersProps'
import type ICharacter from '../modules/characterList/characters.types'

import { store } from '../store/store'
// import { Characters } from '../types/CharactersProps'

export default {
  components: {
    HeaderComponent,
    EditCharacterModal,
    CharacterList
  },

  name: 'FavoritesPage',

  setup() {
    const state = {
      // Todo:
      // Avoid using Object, Function, Array as those are loose types,
      // set type explicitly
      selectedCharacter: null as null | ICharacter,
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
