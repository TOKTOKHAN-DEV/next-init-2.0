import { instance } from './config';
import read from './read';
import write from './write';

const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Basic ${token}`;
  }
};

const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export { setAuthHeader, unsetAuthHeader, read, write };
