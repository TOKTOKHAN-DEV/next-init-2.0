import { CONFIG } from '@config';

import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helper';

const TOKEN_KEY = CONFIG.AUTH_TOKEN_KEY || '@token';

export type Token = NullAble<{
  access: string;
  refresh: string;
  isRegister: boolean;
}>;

export const getToken = () => {
  const token = getLocalStorage<Token>(TOKEN_KEY, {
    access: null,
    isRegister: false,
    refresh: null,
  });
  return token;
};

export const setToken = (token: Token) => {
  setLocalStorage(TOKEN_KEY, token);
};

export const deleteToken = () => {
  removeLocalStorage(TOKEN_KEY);
};
