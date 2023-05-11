import { api } from '@/lib/api'

const ROUTES = {
  CHARACTER: '/character'
}

export default interface IGetCharactersUrlParams {
  category?: string
  searchTerm?: string
  status?: string
  gender?: string
}

export const CharacterListRepo = {
  fetchAllCharacters: (urlParams = {} as IGetCharactersUrlParams) => {
    // const urlParams = {
    //   searchTerm: searchTerm ? `?${category}=${searchTerm}` : '',
    //   status: status ? `&status=${status}` : '',
    //   gender: gender ? `&gender=${gender}` : ''
    // }
    // Todo: Axios has a prop that we can pass to it, that can generate urlParam from an object
    // it appends ? / & by itself to the url params
    console.log(urlParams)
    return api.get(`${ROUTES.CHARACTER}/`, {
      params: {
        status: urlParams.status,
        gender: urlParams.gender?.toLowerCase(),
        [urlParams.category as string]: urlParams.searchTerm
        // category: urlParams.category
      }
    })
    // return api.get(
    //   `${ROUTES.CHARACTER}/${urlParams.searchTerm}${urlParams.status}${urlParams.gender}`
    // )
  }
}
