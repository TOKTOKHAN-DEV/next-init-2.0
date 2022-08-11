
import * as DefaultAxios from 'axios'


import instance from '@apis/_axios/instance';

export class AuthApi {
  axios: DefaultAxios.AxiosInstance = instance;
  constructor(axios?: DefaultAxios.AxiosInstance) {
    if (axios) this.axios = axios;
  }

}

const authApi = new AuthApi();

export default authApi;
