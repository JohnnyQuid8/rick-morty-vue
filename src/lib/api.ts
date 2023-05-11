import axios, { type AxiosResponse } from 'axios'

// Todo:
// Google about axios request/response interceptors,
// its a cool axios feature that is ofter required to
// implement an AUTH_KEY or token or smth similiar
// and also handle error responses in a smart and easy way.
// In short, it fires a function in a certain point before/after
// the request is executed, try to implement it its very useful
export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  responseType: 'json'
})

api.interceptors.response.use((res: AxiosResponse<any>): AxiosResponse<any> => {
  console.log('THIS IS INTERCEPTOR', res)
  return res.data.results
})

api.interceptors.request.use((config: any): any => {
  console.log('THIS IS REQUEST INTER', config)

  return { ...config, headers: { apiKey: localStorage.getItem('token') } }
})
