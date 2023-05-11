import type IGetCharactersUrlParams from './charactersList.repo'
import { CharacterListRepo } from './charactersList.repo'

export const characterService = {
  // Todo: Unneccessary spacing
  fetchAllCharacters: async (urlParams = {} as IGetCharactersUrlParams) => {
    // Todo:
    // you should do try catches for api calls and other sensitive functions
    console.log(urlParams)
    try {
      const characterListResponse = await CharacterListRepo.fetchAllCharacters(urlParams)
      return characterListResponse
    } catch (error) {
      console.log(error)
    }
    // const characterListResponse =
    // await CharacterListRepo.fetchAllCharacters(category,searchTerm, status, gender);

    //     return characterListResponse.data.results
  }
  // Todo: Unneccessary spacing
}
