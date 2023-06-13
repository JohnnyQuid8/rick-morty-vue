import { api } from '@/lib/api'

const ROUTES = {
  EPISODE: '/episode'
}

export const EpisodesListRepo = {
  fetchAllEpisodes: () => {
    return api.get(`${ROUTES.EPISODE}`)
  }
}
