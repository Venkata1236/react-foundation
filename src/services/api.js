import axios from 'axios'

// Single source of truth for the base URL.
// When you deploy to Render, change ONLY this line — nothing else in the app changes.
const BASE_URL = 'http://localhost:8000'

// Axios instance with default config — timeouts, base URL, headers all in one place.
// Every API call in this project uses this instance, not raw axios.
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 second timeout — prevents hanging requests
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getHealth = async () => {
  const response = await apiClient.get('/health')
  return response.data
}

export const getItems = async () => {
  const response = await apiClient.get('/items')
  return response.data
}

export const analyzeText = async (text) => {
  const response = await apiClient.post('/analyze', { text })
  return response.data
}