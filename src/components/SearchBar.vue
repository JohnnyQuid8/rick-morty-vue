<template>
  <div>
    <input
      placeholder="search"
      :debounce:300ms="changeInput"
      @input="findSearchTerm"
      type="text"
      class="search"
    />
    <button @click="setCategory('name')">NAME</button>
    <button @click="setCategory('species')">SPECIES</button>

    <select v-model="state.status">
      <option value="dead">DEAD</option>
      <option value="alive">ALIVE</option>
      <option value="unkown">UNKOWN</option>
    </select>

    <select v-model="state.gender">
      <option option="male">MALE</option>
      <option option="female">FEMALE</option>
      <option option="genderless">GENDERLESS</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import type { Characters } from '../types/CharactersProps'
import vueDebounce, { debounce } from 'vue-debounce'

export default defineComponent({
  name: 'SearchBar',
  components: {},
  props: {
    characters: {
      type: Array as () => Characters[],
      required: true
    },
    onSearchInputChanged: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      searchTerm: '' as string | null,
      category: 'name' as keyof Characters,
      status: '' as string,
      gender: '' as string
      // filteredCharacters: [] as Characters[]
    })

    const setCategory = (category: keyof Characters) => {
      state.category = category
    }

    const findSearchTerm = (event: any) => {
      if (event.target.value) {
        state.searchTerm = event.target.value
        console.log(state)
        return props.onSearchInputChanged(state)
      }
    }

    watch(
      () => state.gender,
      (newVal, oldVal) => {
        console.log(`Gender changed from ${oldVal} to ${newVal}`)
      }
    )

    watch(
      () => state.status,
      (newVal, oldVal) => {
        console.log(`Status changed from ${oldVal} to ${newVal}`)
      }
    )

    return {
      state,
      findSearchTerm,
      setCategory
    }
  },
  methods: {
    changeInput(event: InputEvent) {
      this.state.searchTerm = event.target.value
    },
    setStatus(status: string) {
      this.state.status = status
    },
    setGender(gender: string) {
      this.state.gender = gender.toLowerCase()
    }
  }
})
</script>
<style scope>
.search {
  position: absolute;
  right: 0;
  top: 3rem;
  width: 5rem;
  border-radius: 2rem;
}
</style>
