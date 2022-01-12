import axios from "axios"

const BASE_URL = 'http://dcac-129-205-124-97.eu.ngrok.io/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });


export { api }
