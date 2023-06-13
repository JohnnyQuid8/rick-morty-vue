<template>
  <div class="container">
    <div class="logo-box" @click="goMain">
      <img src="../assets/images/logo.webp" class="logo-img" />
    </div>

    <div class="header">
      <p>Episode name: {{ state.episodeName }}</p>
      <p>Air Date: {{ state.airDate }}</p>
      <p>episodes: {{ state.episodes.length }}</p>
    </div>
    <div class="second-half">
      <div class="episodes-input">
        <p>Pick Location</p>
        <select v-model="state.episode" @change="updateEpisode">
          <option v-for="(episode, index) in state.episodes" :key="index" :value="episode.id">
            Episodes - {{ episode.id }}
          </option>
        </select>
      </div>

      <div class="character-list">
        <CharacterList :characters="state.characters" :episode="state.episodeId" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { characterService } from '../modules/characterList/charactesList.service'
import CharacterList from '../components/CharacterList.vue'
import type ICharacter from '../modules/characterList/characters.types'
import { episodesService } from '@/modules/episodesList/episodesList.service'
import type IEpisodes from '../modules/episodesList/episodesList.type'
import { useRouter } from 'vue-router'

interface IEpisodesPageProps {
  characters: ICharacter[]
  selectedCharacter: ICharacter | null
  episodes: IEpisodes[]
  episode: string
  episodeName: string
  airDate: Date | null
  episodeId: string[]
}

export default defineComponent({
  name: 'EpisodesPage',

  components: {
    CharacterList
  },

  setup() {
    const state = reactive<IEpisodesPageProps>({
      characters: [] as ICharacter[],
      selectedCharacter: null as null | ICharacter,
      episodes: [],
      episode: '',
      airDate: null,
      episodeId: [] as string[],
      episodeName: ''
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

    const fetchAllEpisodes = (): void => {
      episodesService.fetchAllEpisodes().then((response) => {
        state.episodes = response
      })
    }
    fetchAllEpisodes()

    const updateEpisode = (): void => {
      const selectedEpisode = state.episodes.find((episode) => episode.id === state.episode)
      if (selectedEpisode) {
        state.episodeId = selectedEpisode.characters
        state.airDate = selectedEpisode.air_date
        state.episodeName = selectedEpisode.name
      }
    }

    return {
      state,
      updateEpisode,
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  height: 100vh;
  /* gap: 0.5rem; */
}
.logo-box {
  margin-top: 10rem;
  width: 30rem;
}

.logo-img {
  width: 100%;
  height: 100%;
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
  margin-top: 5rem;
}
.second-half {
  margin-top: 5rem;
  display: flex;
  width: 80%;
  height: 50%;
}

.episodes-input {
  margin-top: 0.5%;
  display: flex;
  flex-direction: column;
  background-color: rgb(243 244 246);
  width: 20rem;
  height: fit-content;
  border-radius: 0.5rem;
  padding: 0.8rem;
  gap: 0.5rem;
}
.character-list {
  height: fit-content;
  padding-top: 0.4rem;
  padding-left: 6rem;
  overflow: hidden;

}
select {
  width: 100%;
  height: 50%;
  border-radius: 0.5rem;
  margin-top: 0.7rem;
  background-color: white;
  border: 0.01rem solid gray;
}
</style>
