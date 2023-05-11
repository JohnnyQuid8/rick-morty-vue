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

export default defineComponent({
  name: 'MyModal',
  props: {
    character: {
      required: false
    }
  },

  setup(props) {
    const state = reactive({
      visible: false as boolean
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
    showModal() {
      return (this.state.visible = true)
    },
    addFavorite(character: Object) {
      // store.favoritesCharacters = [character]
      store.favoritesCharacters.push(character)
    }
    // Todo:
    // You should probably not have state.favChar and store.favChar
    // probably one of those two is enough?
  }
})
</script>
