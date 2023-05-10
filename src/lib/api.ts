import axios from "axios";

// Todo:
// Google about axios request/response interceptors,
// its a cool axios feature that is ofter required to 
// implement an AUTH_KEY or token or smth similiar
// and also handle error responses in a smart and easy way.
// In short, it fires a function in a certain point before/after 
// the request is executed, try to implement it its very useful
export const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    responseType: 'json'
})