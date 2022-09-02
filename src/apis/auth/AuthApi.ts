import * as DefaultAxios from 'axios';

import instance from '@apis/_axios/instance';

import { deleteToken, getToken, setToken } from '@utils/localStorage/token';

import { TokenType } from './AuthApi.type';

export class AuthApi {
  // axios: DefaultAxios.AxiosInstance = instance;
  constructor(public axios: DefaultAxios.AxiosInstance) {
    if (axios) this.axios = axios;
  }
  async refreshToken() {
    try {
      const token = getToken();
      if (!token?.refresh) throw new Error('not found refresh-token');

      const { data: newToken }: { data: TokenType } = await this.axios.post(
        `/v1/user/refresh`,
        { refresh: token.refresh },
      );

      setToken({ ...token, ...newToken });

      return newToken;
    } catch (e) {
      console.error(e);
      deleteToken();

      throw new Error('not token');
    }
  }
}

const authApi = new AuthApi(instance);

export default authApi;
