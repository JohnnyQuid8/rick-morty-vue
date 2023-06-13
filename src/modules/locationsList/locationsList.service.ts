// import type IGetLocationsUrlParams from './locationsList.repo'
import { LocationsListRepo } from './locationsList.repo'

export const locationsService = {
  fetchAllLocations: async () => {
    try {
      const locationsListResponse = await LocationsListRepo.fetchAllLocations()
      return locationsListResponse
    } catch (error) {
      alert(error)
    }
  }
}
