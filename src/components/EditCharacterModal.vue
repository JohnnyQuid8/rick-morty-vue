<template>
  <div class="container">
    <a-modal :open="state.visible" title="Basic Modal" @ok="handleOk" class="modal">
      <a-form>
        <a-form-item label="Name">
          <a-input :value="character.name" />
        </a-form-item>
      </a-form>
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
    },
    modalVisible: {
      type: Boolean,
      required: true
    }
  },

  setup(props) {
    const state = reactive({
      visible: false as boolean,
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
<style>
.modal {
  position: absolute;
  width: 100%;
}
</style>
