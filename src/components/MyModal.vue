<template>
  <div class="container">
    <a-modal :open="state.visible" title="Basic Modal" @ok="handleOk">
      <p>{{ character!.name }}</p>
      <p>{{ character!.gender }}</p>
      <p>{{ character!.id }}</p>
      <img :src="character!.image" />
      <button @click="addFavorite(character!)">FAVORITES</button>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from 'vue'
import { store } from '../store/store'
// import { Characters } from '../types/CharactersProps'

export default defineComponent({
  name: 'MyModal',
  props: {
    character: {
      type: Object,
      required: false
    }
  },

  setup(props) {
    const state = reactive({
      visible: false as boolean,
      favoritesCharacters: [] as Object[]
    })

    const handleOk = (e: MouseEvent) => {
      console.log(state.visible)
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
    showModal() {
      return (this.state.visible = true)
    },
    addFavorite(character: Object) {
      this.state.favoritesCharacters = [character]
      store.favoritesCharacters.push(...this.state.favoritesCharacters)
      console.log(
        this.state.favoritesCharacters,
        '         ',
        character,
        '         ',
        store.favoritesCharacters
      )
    }
  }
})
</script>
