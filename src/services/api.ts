import axios from "axios";

export const api = axios.create({
    // baseURL:  "http://localhost:8000/api"
    baseURL:  "https://mywallet3.herokuapp.com/api"
})