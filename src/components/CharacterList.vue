<template>
  <div v-for="(character, index) in characters" :key="index" class="characters__list">
    <img :src="character.image" class="characters__list--image" @click="setCharacter(character)" />
  </div>
  <MyModal :character="state.selectedCharacter" />
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
    }
  },
  setup() {
    const state = reactive({
      characters: [] as ICharacter[],
      selectedCharacter: {}
    })

    return {
      state
    }
  },

  methods: {
    setCharacter(character: any) {
      // if (character) {
      //   this.state.selectedCharacter = character
      // } else {
      //   this.state.selectedCharacter = null
      // }

      // Todo:
      // Few cleaner solutions to the problem above
      // this.state.selectedCharacter = character ? character : null;
      this.state.selectedCharacter = character || null // Todo: Investigate ?? and || operators and their effects when used like this

      // note the type of character argument is Characters, but you are checking if its a character inside a func.
      // that implies that typing of character arg is wrong
    }
  }
})
</script>
