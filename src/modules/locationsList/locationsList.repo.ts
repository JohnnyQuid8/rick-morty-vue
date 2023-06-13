import { api } from '@/lib/api'

const ROUTES = {
  LOCATION: '/location'
}

export const LocationsListRepo = {
  fetchAllLocations: () => {
    return api.get(`${ROUTES.LOCATION}/`)
  }
}
