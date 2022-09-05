import * as DefaultAxios from 'axios';

import instance from '@apis/_axios/instance';

import { getToken, setToken } from '@utils/localStorage/token';

import { TokenType } from './AuthApi.type';

export class AuthApi {
  constructor(public axios: DefaultAxios.AxiosInstance) {
    this.axios = axios;
  }

  refreshToken = async (): Promise<TokenType | void> => {
    const token = getToken();
    if (!token.access || !token.refresh) throw Error('Not found refresh-token');
    try {
      const { data: refreshed } = await this.axios({
        method: 'GET',
        url: `/v1/refresh/`,
        data: { refresh: token.refresh },
      });
      setToken(refreshed);
      return refreshed;
    } catch (err) {
      throw new Error('refresh-error');
    }
  };
}

const authApi = new AuthApi(instance);

export default authApi;
