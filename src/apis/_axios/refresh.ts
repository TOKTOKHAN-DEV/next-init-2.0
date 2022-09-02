import { AxiosRequestConfig } from 'axios';

import auth from '../auth/AuthApi';
import instance from './instance';

type Request = (access: string) => void;

let isTokenRefreshing = false;
let refreshSubscribers: Request[] = [];

const onTokenRefreshed = (access: string) => {
  refreshSubscribers.forEach((callback: Request) => callback(access));
};

const addRefreshSubscriber = (callback: Request) => {
  refreshSubscribers.push(callback);
};

export const refresh = async (reqData: AxiosRequestConfig) => {
  // reqData
  const retryOriginalRequest = new Promise((resolve) => {
    addRefreshSubscriber((access: string) => {
      if (reqData.headers) {
        reqData.headers.Authorization = 'Bearer ' + access;
        resolve(instance(reqData));
        return;
      }
      resolve(null);
    });
  });

  if (!isTokenRefreshing) {
    try {
      isTokenRefreshing = true;
      const token = await auth.refreshToken();
      // TODO 필요할 경우 여기서 토큰을 저장한다.
      onTokenRefreshed(token.access);
      // 완료되면 제거
      refreshSubscribers = [];
    } catch (error) {
      // TODO 최대 3번 같은거 추가필요해 보임
      console.log(error);
      throw error;
    } finally {
      isTokenRefreshing = false;
    }
  }

  return retryOriginalRequest;
};
