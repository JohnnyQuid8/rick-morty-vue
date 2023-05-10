<template>
  <HeaderComponent></HeaderComponent>
  <div class="favorites-container">
    <button><RouterLink to="/favorites" class="favorites-link">FAVORITES</RouterLink></button>
  </div>
  <SearchBar :onSearchInputChanged="onSearchInputChanged" :characters="state.characters" />
  <div class="characters">
    <div v-for="(character, index) in state.characters" :key="index" class="characters__list">
      <img
        :src="character.image"
        class="characters__list--image"
        @click="setCharacter(character)"
      />
    </div>
    <MyModal v-if="state.selectedCharacter" :character="state.selectedCharacter" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { characterService } from '../modules/characterList/charactesList.service'
import SearchBar from '@/components/SearchBar.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import type { Characters } from '../types/CharactersProps'
import MyModal from '../components/MyModal.vue'

export default defineComponent({
  name: 'MainPage',

  components: {
    HeaderComponent,
    SearchBar,
    MyModal
  },

  setup() {
    const state = reactive({
      characters: [] as Characters[],
      selectedCharacter: null as Characters | null
    })

    const fetchItAll = () => {
      characterService.fetchAllCharacters().then((response) => {
        state.characters = response
      })
    }

    const onSearchInputChanged = (
      category?: string,
      searchTerm?: string,
      status?: string,
      gender?: string
    ) => {
      characterService
        .fetchAllCharacters(category, searchTerm, status, gender)
        .then((res) => (state.characters = res))
    }

    fetchItAll()

    return {
      state,
      onSearchInputChanged
    }
  },

  methods: {
    setCharacter(character: Characters) {
      if (character) {
        this.state.selectedCharacter = character
      } else {
        this.state.selectedCharacter = null
      }
    }
  }
})
</script>

<style lang="scss" scope>
.favorites-container {
  position: fixed;
  right: 0;
  top: 1.5rem;
}

.favorites-link {
  text-decoration: none;
  color: black;
}
.characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    justify-content: flex-start;
  }

  &__list {
    width: 100%;
    padding: 1.5rem;
    @media only screen and (min-width: 600px) {
      max-width: 10rem;
    }

    &--image {
      width: 100%;
    }
  }
}
</style>
