<template>
  <div class="containers">
    <div class="logo-box" @click="goMain">
      <img src="../assets/images/logo.webp" class="logo-img" />
    </div>

    <div class="header">
      <div class="search-wrapper">
        <input type="text" class="search" placeholder="Search Something. . ." />
        <button @click="show" class="search-button">Search</button>
      </div>
      <p>Characters length</p>
    </div>
    <div class="second-half">
      <div class="inputs-wrapper">
        <form>
          <div class="locations-input">
            <p>Filters</p>
            <p>Clear Filters</p>
          </div>

          <div class="locations-input">
            <p>Status</p>
            <input
              type="radio"
              id="alive"
              value="alive"
              v-model="state.status"
              name="status"
            />
            <label for="alive">Alive</label>
            <input
              type="radio"
              id="dead"
              value="dead"
              v-model="state.status"
              name="status"
            />
            <label for="dead">Dead</label>
            <input
              type="radio"
              id="unkown"
              value="unknown"
              v-model="state.status"
              name="status"
            />
            <label for="unkown">Unkown</label>
          </div>
          <div class="locations-input">
            <p>Species</p>
            <input
              type="radio"
              id="human"
              value="human"
              v-model="state.species"
              name="species"
            />
            <label for="human">Human</label>
            <input
              type="radio"
              id="alien"
              value="alien"
              v-model="state.species"
              name="species"
            />
            <label for="alien">Alien</label>
            <input
              type="radio"
              id="humanoid"
              value="humanoid"
              v-model="state.species"
              name="species"
            />
            <label for="humanoid">Humanoid</label>
            <input
              type="radio"
              id="poopybutthole"
              value="poopybutthole"
              v-model="state.species"
              name="species"
            />
            <label for="poopybutthole">Poppybutthole</label>
            <input
              type="radio"
              id="mythological"
              value="mythological"
              v-model="state.species"
              name="species"
            />
            <label for="mythological">Mythological</label>
            <input
              type="radio"
              id="unknown"
              value="unknown"
              v-model="state.species"
              name="species"
            />
            <label for="unknown">Unkown</label>
            <input
              type="radio"
              id="animal"
              value="animal"
              v-model="state.species"
              name="species"
            />
            <label for="animal">Animal</label>
            <input
              type="radio"
              id="disease"
              value="disease"
              v-model="state.species"
              name="species"
            />
            <label for="disease">Disease</label>
            <input
              type="radio"
              id="robot"
              value="robot"
              v-model="state.species"
              name="species"
            />
            <label for="robot">Robot</label>
            <input
              type="radio"
              id="cronenberg"
              value="cronenberg"
              v-model="state.species"
              name="species"
            />
            <label for="cronenberg">Cronenberg</label>
            <input
              type="radio"
              id="planet"
              value="planet"
              v-model="state.species"
              name="species"
            />
            <label for="planet">Planet</label>
          </div>

          <div class="locations-input">
            <p>Gender</p>
            <input
              name="gender"
              v-model="state.gender"
              type="radio"
              id="female"
              value="female"
            />
            <label for="female">Female</label>
            <input
              name="gender"
              v-model="state.gender"
              type="radio"
              id="male"
              value="male"
            />
            <label for="male">Male</label>
            <input
              name="gender"
              v-model="state.gender"
              type="radio"
              id="genderless"
              value="genderless"
            />
            <label for="genderless">Genderless</label>
            <input
              type="radio"
              id="unknown-gender"
              value="unknown-gender"
              name="gender"
              v-model="state.gender"
            />
            <label for="unknown-gender">Unkown</label>
          </div>
        </form>
      </div>
      <div class="character-list">
        <CharacterList
          :characters="state.characters"
          :status="state.status"
  :species="state.species"
  :gender="state.gender"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { characterService } from '../modules/characterList/charactesList.service'
import CharacterList from '../components/CharacterList.vue'
import type ICharacter from '../modules/characterList/characters.types'
import { useRouter } from 'vue-router'

interface ICharacterPageProps {
  characters: ICharacter[]
  selectedCharacter: ICharacter | null
  status: string
  species: string
  gender: string
  propStatus: string
  propSpecies: string
  propGender: string
}

export default defineComponent({
  name: 'CharactersPage',

  components: {
    CharacterList
  },

  setup() {
    const state = reactive<ICharacterPageProps>({
      characters: [] as ICharacter[],
      selectedCharacter: null as null | ICharacter,
      status: '',
      species: '',
      gender: '',
      propStatus: '',
      propSpecies: '',
      propGender: ''
    })

    const router = useRouter()

    const goMain = () => {
      router.push('/mainpage')
    }

    const fetchAllCharacters = (): void => {
      characterService.fetchAllCharacters().then((response) => {
        console.log(response)
        state.characters = response
      })
    }

    fetchAllCharacters()

    // const show = (): void => {
    //   state.props= state.characterUrlParams
    // }

    return {
      state,
      goMain
    }
  },
  methods: {}
})
</script>
<style scoped>
html,
body {
  position: absolute;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
}
.containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  height: 100vh;
  gap: 3rem;
}
.second-half {
  display: flex;
  width: 70%;
  height: 50%;
}
.inputs-wrapper {
  height: fit-content;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input[type='radio'] {
  display: none;
}

label {
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 0.5rem;
  width: fit-content;
}

input[type='radio']:checked + label {
  background-color: rgb(236 208 111);
}

.header {
  width: 80%;
  background-color: rgb(243 244 246);
  border-radius: 0.5rem;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-left: 10rem;
}
.logo-box {
  margin-top: 10rem;
  width: 30rem;
}

.logo-img {
  width: 100%;
  height: 100%;
}

.locations-input {
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  background-color: rgb(243 244 246);
  width: 19rem;
  height: fit-content;
  border-radius: 0.5rem;
  padding: 0.8rem;
  gap: 0.5rem;
}
label {
  background-color: white;
}
.character-list {
  height: fit-content;
  padding-top: 0.4rem;
  padding-left: 7rem;
}

.search-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
}
.search {
  border-radius: 0.5rem;
  height: 3rem;
  border: 2px solid lightgray;
  width: 15rem;
  text-align: center;
}
.search-button {
  position: absolute;
  margin-left: 14rem;
  z-index: 2;
  height: 3rem;
  border-radius: 0.5rem;
  border: 2px solid lightgray;
  background-color: rgb(236 208 111);
}
</style>
