import axios from 'axios';
import { BASE_URL } from 'utils/constants';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
