import axios from 'axios';

import { CONFIG } from '@config';
import { apiLogger } from '@utils/apiLogger';
import { getToken } from '@utils/localStorage/token';
import styledConsole from '@utils/styledConsole';

const isDev = CONFIG.ENV === 'development';

const instance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    const isAccess = !!token && !!token.access;
    if (isAccess) setAuthHeader(token.access as string);
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
  async (error) => {
    try {
      const { response: res, config: reqData } = error || {};
      const { status } = res || {};
      const isUnAuthError = status === 401;
      const isExpiredToken = status === 444;
      const isDev = CONFIG.ENV === 'development';

      if (isDev)
        apiLogger({ status, reqData, resData: error, method: 'error' });

      if (isExpiredToken) {
        // const token = await refreshToken();
        // if (token?.access) {
        //   setAuthHeader(token?.access);
        //   return instance(reqData);
        // }
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

export { setAuthHeader, unsetAuthHeader };
export default instance;
