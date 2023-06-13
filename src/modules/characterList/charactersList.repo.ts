import { api } from '@/lib/api'

const ROUTES = {
  CHARACTER: '/character'
}



export const CharacterListRepo = {
  fetchAllCharacters: () => {
 
    return api.get(`${ROUTES.CHARACTER}`)

  }
}
