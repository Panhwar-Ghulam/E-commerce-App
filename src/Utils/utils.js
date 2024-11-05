// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);


api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
    } else {
      console.error(`API Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);


export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error posting data');
  }
};


