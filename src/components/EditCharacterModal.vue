<template>
  <div class="container">
    <a-modal :open="state.visible" title="Basic Modal" @ok="handleOk">
      <p>{{ character[0] }}</p>
      <p>{{ character[1] }}</p>
      <p>{{ character[2] }}</p>
      <img :src="character[3]" />
    </a-modal>
  </div>
  <p>jdjsa</p>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from 'vue'
import { store } from '../store/store'
// import { Characters } from '../types/CharactersProps'

export default defineComponent({
  name: 'EdiCharacterModal',

  props: {
    character: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const state = reactive({
      visible: true as boolean,
      favoritesCharacters: []
    })

    const handleOk = (e: MouseEvent) => {
      state.visible = false
    }

    watch(
      () => props.character,
      (newVal, oldVal) => {
        console.log(`Gender changed from ${oldVal} to ${newVal} ${props.character}`)
        state.visible = true
      }
    )

    return {
      state,
      handleOk
    }
  },
  methods: {
    EditFavorite(character: string, name: string, gender: string, image: string) {
      this.state.favoritesCharacters = [character, name, gender, image]
      store.favoritesCharacters.push(this.state.favoritesCharacters)
    }
  }
})
</script>
