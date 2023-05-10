import { CharacterListRepo } from "./charactersList.repo"


export const characterService = {

    fetchAllCharacters: async (category?: string,searchTerm?: string, status?: string, gender?: string) => {
    const characterListResponse = 
    await CharacterListRepo.fetchAllCharacters(category,searchTerm, status, gender);

        return characterListResponse.data.results
    },
    

}