import { EpisodesListRepo } from "./episodesList.repo";

export const episodesService = {
    fetchAllEpisodes: async () => {
        try{
            const episodesListResponse = await EpisodesListRepo.fetchAllEpisodes()
            return episodesListResponse
        } catch(error){
            alert(error)
        }
    }
}