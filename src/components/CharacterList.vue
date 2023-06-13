<template>
  <div class="container">
    <div
      v-for="(character, index) in state.filteredCharacters"
      :key="index"
      class="characters__list"
    >
      <div class="card">
        <img
          :src="character.image"
          class="characters__list--image"
          @click="setCharacter(character)"
        />
        <div class="character-info">
          <h2>{{ character.name }}</h2>
          <h3>{{ character.species }}</h3>
          <h4>Last know location:</h4>
          <p>{{ character.location?.name }}</p>
          <h4>Origin:</h4>
          <p>{{ character.origin?.name }}</p>
        </div>
        <p class="index">#{{ index }}</p>
      </div>
    </div>
    <MyModal :character="state.selectedCharacter" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import type ICharacter from '../modules/characterList/characters.types'
import MyModal from '../components/MyModal.vue'

export default defineComponent({
  name: 'CharacterList',
  components: {
    MyModal
  },
  props: {
    characters: {
      type: Array as () => ICharacter[],
      required: true
    },

    location: {
      type: String,
      required: true
    },
    episode: {
      type: Array as () => string[],
      required: true
    },
    propsForCharacterList: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      characters: [] as ICharacter[],
      selectedCharacter: {},
      filteredCharacters: [] as ICharacter[]
    })

    const filteringCharacters = (): void => {
      if (props.location) {
        state.filteredCharacters = props.characters.filter(
          (character) => character.location?.name === props.location
        )
      }
      if (props.episode) {
        const episodesIds = props.episode.map((episode) => episode.split('/').pop())
        state.filteredCharacters = props.characters.filter((character) =>
          episodesIds.includes(`${character.id}`)
        )
      }

      if (props.propsForCharacterList) {
        state.filteredCharacters = props.characters.filter((character) => {
          const { status, species, gender } = props.propsForCharacterList
          return (
            character.status?.toLowerCase() === status.toLowerCase() &&
            character.species?.toLowerCase() === species.toLowerCase() &&
            character.gender?.toLowerCase() === gender.toLowerCase()
          )
        })
      }
    }

    filteringCharacters()

    watch(() => props.location, filteringCharacters, { immediate: true })
    watch(() => props.episode, filteringCharacters, { immediate: true })
    watch(() => props.propsForCharacterList, filteringCharacters, { immediate: true })

    return {
      state
    }
  },
  methods: {
    setCharacter(character: any) {
      this.state.selectedCharacter = character || null
    }
  }
})
</script>
<style scoped>
html,
body {
  margin: 0;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  width: 58rem;
  background-color: rgb(243 244 246);
  border-radius: 0.5rem;
  scroll-behavior: hidden;
}
.card {
  margin-left: 1rem;
  margin-right: 1rem;
  height: 80%;
  width: 56rem;
  background-color: white;
  display: flex;
  border-radius: 0.7rem;
  margin-top: 1rem;
}
.character-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  padding-top: 1rem;
}
.index {
  position: relative;
  top: 25%;
  padding-left: 5rem;
  font-size: 10rem;
}
img {
  border-radius: 0.7rem 0 0 0.7rem;
}
p {
  color: rgb(128, 128, 128);
}
</style>
// if (character) { // this.state.selectedCharacter = character // } else { //
this.state.selectedCharacter = null // } // Todo: // Few cleaner solutions to the problem above //
Todo: Investigate ?? and || operators and their effects when used like this // note the type of
character argument is Characters, but you are checking if its a character inside a func. // that
implies that typing of character arg is wrong
