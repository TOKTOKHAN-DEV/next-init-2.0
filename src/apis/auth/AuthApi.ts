import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { TokenType } from './AuthApi.type';

export class AuthApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getRefreshedToken = async (refresh: string): Promise<TokenType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/refresh/`,
      data: { refresh },
    });
    return data;
  };
}

const authApi = new AuthApi();

export default authApi;
