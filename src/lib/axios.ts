import axios from "axios"

export const api = axios.create({
  // baseURL: 'http://localhost:5000'
  baseURL: 'http://127.0.0.1:5000'
})

