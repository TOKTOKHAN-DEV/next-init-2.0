import axios, { AxiosError } from 'axios';

import { ENV } from '@/configs/env';
import { apiLogger } from '@/utils/logger/api-logger';
import styledConsole from '@/utils/logger/styled-console';
import { tokenStorage } from '@/utils/web-storage/token';

import { refresh } from './refresh';

const isDev = ENV.NODE_ENV === 'development';

const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = tokenStorage?.get();
    const isAccess = !!token && !!token.access;
    if (isAccess) {
      config.headers.setAuthorization(`Bearer ${token.access}`);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    const { status, config: reqData, data: resData } = res;
    if (isDev) apiLogger({ status, reqData, resData });
    return res;
  },
  async (error: AxiosError) => {
    try {
      const { response: res, config: reqData } = error || {};
      const { status } = res || { status: 400 };
      const isUnAuthError = status === 401;
      const isExpiredToken = status === 444;

      if (isDev)
        apiLogger({ status, reqData, resData: error, method: 'error' });

      if (isExpiredToken) {
        return refresh(reqData);
      }

      if (isUnAuthError) {
        // deleteToken();
        // if (isClient) Router.push(ROUTE.LOGIN);
        // return Promise.reject(error);
      }

      return Promise.reject(error);
    } catch (e) {
      styledConsole({
        //
        method: 'error',
        topic: 'UN_HANDLED',
        title: 'axios-interceptor',
        data: e,
      });
    }
  },
);

export default instance;
