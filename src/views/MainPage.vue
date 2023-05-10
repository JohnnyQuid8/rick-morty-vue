<template>
  <!-- TODO: use single tag syntax whenever possible -->
  <!-- <HeaderComponent></HeaderComponent> -->
  <HeaderComponent />
  <div class="favorites-container">
    <button><RouterLink to="/favorites" class="favorites-link">FAVORITES</RouterLink></button>
  </div>
  <!-- INFO: Single tag wooho :D -->
  <SearchBar :onSearchInputChanged="onSearchInputChanged" :characters="state.characters" />
  <!-- Todo: Chracters should really be a component on its own,
  Ideally you would store all the state in parent component (MainPage), and pass it down
  to so called dumb, pure components, that only take data as props, and compose them into ui -->
  <div class="characters">
    <div v-for="(character, index) in state.characters" :key="index" class="characters__list">
      <img
        :src="character.image"
        class="characters__list--image"
        @click="setCharacter(character)"
      />
    </div>
    <!-- Todo: Bug je zato sto imas v-if, modal nije renderovan dok ne selektujes char
    kad selektujes char, tek onda dobija prvi put character prop, i on je vec setovan incijalno, i zato se unutar 
    my modal ne okidaju promene, ako obrise v-if videces da radi -->
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

interface IMainPageProps {
  characters: Characters[]
  selectedCharacter: Characters | null
}

export default defineComponent({
  name: 'MainPage',

  components: {
    HeaderComponent,
    SearchBar,
    MyModal
  },

  setup() {
    // Todo:
    // Use generic types, 'reactive<ImainPageProps>'' tells us 
    // that the return value of 'reactive' function
    // is expected to be 'IMainPageProps'              

    const state = reactive<IMainPageProps>({
      characters: [],
      selectedCharacter: null
    })

    const fetchItAll = ():void => {
      characterService.fetchAllCharacters().then((response) => {
        state.characters = response
      })
    }

    // Todo:
    // Functions should ideally take 2/3 arguments max, otherwise its 
    // a much better solution to pack it all up into a single object
    // ie:
    
    // const onSearchInputChanged(searchParams: IGetCharactersUrlParams)

    // then also set the functions in characterService/Repo, take the same object as an argument
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
      // if (character) {
      //   this.state.selectedCharacter = character
      // } else {
      //   this.state.selectedCharacter = null
      // }

      // Todo:
      // Few cleaner solutions to the problem above
      // this.state.selectedCharacter = character ? character : null;
      this.state.selectedCharacter = character || null; // Todo: Investigate ?? and || operators and their effects when used like this

      // note the type of character argument is Characters, but you are checking if its a character inside a func.
      // that implies that typing of character arg is wrong 
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
} // Todo: always an enter after a block of code
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
