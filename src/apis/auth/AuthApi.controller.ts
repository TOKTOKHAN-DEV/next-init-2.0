import axios from 'axios';
import { getToken, setToken } from '@utils/localStorage/token';

import authApi, { AuthApi } from './AuthApi';
import { TokenType } from './AuthApi.type';

export class AuthController {
  constructor(private auth: AuthApi) {
    this.auth = auth;
  }

  refreshToken = async (): Promise<TokenType | void> => {
    const token = getToken();
    if (!token.access || !token.refresh) throw Error('Not found refresh-token');
    try {
      const { data: refreshed } = await axios({
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

const authController = new AuthController(authApi);

export default authController;
