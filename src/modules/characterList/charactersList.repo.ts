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
    // const urlParams = {
    //   searchTerm: searchTerm ? `?${category}=${searchTerm}` : '',
    //   status: status ? `&status=${status}` : '',
    //   gender: gender ? `&gender=${gender}` : ''
    // }
    // Todo: Axios has a prop that we can pass to it, that can generate urlParam from an object
    // it appends ? / & by itself to the url params
    return api.get(`${ROUTES.CHARACTER}/`, {
      params: {
        status: status,
        gender,
        [category as string]: searchTerm
      }
    })
    // return api.get(
    //   `${ROUTES.CHARACTER}/${urlParams.searchTerm}${urlParams.status}${urlParams.gender}`
    // )
  }
}
