import { CharacterListRepo } from './charactersList.repo'

export const characterService = {
  fetchAllCharacters: async () => {
    try {
      const characterListResponse = await CharacterListRepo.fetchAllCharacters()
      return characterListResponse
    } catch (error) {
      console.log(error)
    }
  }
}
