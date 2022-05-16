import { TokenType } from '@apis/auth/AuthApi.type';

import { CONFIG } from '@config';

import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helper';

const TOKEN_KEY = CONFIG.AUTH_TOKEN_KEY || '@token';

export const getToken = () => {
  const token = getLocalStorage<TokenType>(TOKEN_KEY, {
    access: null,
    isRegister: false,
    refresh: null,
  });
  return token;
};

export const setToken = (token: TokenType) => {
  setLocalStorage(TOKEN_KEY, token);
};

export const deleteToken = () => {
  removeLocalStorage(TOKEN_KEY);
};
