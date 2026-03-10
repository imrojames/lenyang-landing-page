import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined in environment variables');
}

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;