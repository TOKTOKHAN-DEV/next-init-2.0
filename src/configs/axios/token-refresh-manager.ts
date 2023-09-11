import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { TokenType, tokenStorage } from '@/utils/web-storage/token';

import { ENV } from '../env';

export default class TokenRefreshManager {
  private rotated: Promise<TokenType> | null = null;

  axios: AxiosInstance;

  constructor(params: { axios: AxiosInstance }) {
    this.axios = params.axios;
  }

  rotate = async (): Promise<TokenType> => {
    const token = tokenStorage?.get();
    if (!token?.refresh) throw new Error('not found refresh-token');
    const { data: newToken }: { data: TokenType } = await axios.post(
      `${ENV.API_BASE_URL || ''}/v1/user/refresh/`,
      { refresh: token.refresh },
    );
    return newToken;
  };

  refresh = async (originalRequest: AxiosRequestConfig) => {
    try {
      if (!this.rotated) this.rotated = this.rotate();
      const newToken = await this.rotated;
      tokenStorage?.set(newToken);
      if (originalRequest?.headers) {
        originalRequest.headers.Authorization = `Bearer ${newToken.access}`;
      }
      return await this.axios.request(originalRequest);
    } catch (err) {
      tokenStorage?.remove();
      throw err;
    } finally {
      this.rotated = null;
    }
  };
}
