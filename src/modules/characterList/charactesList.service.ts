import { CharacterListRepo } from "./charactersList.repo"


export const characterService = {
    // Todo: Unneccessary spacing
    fetchAllCharacters: async (category?: string,searchTerm?: string, status?: string, gender?: string) => {
    // Todo:
    // you should do try catches for api calls and other sensitive functions
    try {
        const characterListResponse = 
        await CharacterListRepo.fetchAllCharacters(category,searchTerm, status, gender);
        return characterListResponse.data.results
    } catch (error) {
        console.log(error)
    }
    // const characterListResponse = 
    // await CharacterListRepo.fetchAllCharacters(category,searchTerm, status, gender);

    //     return characterListResponse.data.results
    },
    // Todo: Unneccessary spacing

}