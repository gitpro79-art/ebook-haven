import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: async (username: string, email: string, password: string) => {
    const response = await api.post('/api/auth/register', { username, email, password });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  },
};

export const wishlistAPI = {
  getWishlist: async () => {
    const response = await api.get('/api/wishlist');
    return response.data;
  },
  addToWishlist: async (bookId: string) => {
    const response = await api.post(`/api/wishlist/add/${bookId}`);
    return response.data;
  },
  removeFromWishlist: async (bookId: string) => {
    const response = await api.delete(`/api/wishlist/remove/${bookId}`);
    return response.data;
  },
};

export default api;
