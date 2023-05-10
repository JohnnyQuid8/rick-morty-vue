import { api } from '@/lib/api'

const ROUTES = {
  CHARACTER: '/character'
}

export const CharacterListRepo = {
  fetchAllCharacters: (
    category?: string,
    searchTerm?: string,
    status?: string,
    gender?: string
  ) => {
    const urlParams = {
      searchTerm: searchTerm ? `?${category}=${searchTerm}` : '',
      status: status ? `&status=${status}` : '',
      gender: gender ? `&gender=${gender}` : ''
    }
    console.log(`${ROUTES.CHARACTER}/${urlParams.searchTerm}${urlParams.status}${urlParams.gender}`)
    return api.get(
      `${ROUTES.CHARACTER}/${urlParams.searchTerm}${urlParams.status}${urlParams.gender}`
    )
  }
}
