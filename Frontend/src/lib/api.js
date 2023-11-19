import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your default base URL
  withCredentials: true, // Include credentials in requests
})

export default api