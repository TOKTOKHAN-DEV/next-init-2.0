import axios from 'axios';
import { BASE_URL } from 'config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Basic ${token}`;
  }
};

const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export { setAuthHeader, unsetAuthHeader };
export default instance;
