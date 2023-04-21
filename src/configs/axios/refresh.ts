import axios, { AxiosRequestConfig } from 'axios';

import { ENV } from '@/configs/env';
import { TokenType, tokenStorage } from '@/utils/web-storage/token';

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

const refreshToken = async () => {
  try {
    const token = tokenStorage?.get();
    if (!token?.refresh) throw new Error('not found refresh-token');
    const { data: newToken }: { data: TokenType } = await axios.post(
      `${ENV.API_BASE_URL}/v1/user/refresh/`,
      { refresh: token.refresh },
    );
    tokenStorage?.set({ ...token, ...newToken });
    return newToken;
  } catch (err) {
    tokenStorage?.remove();
    throw err;
  }
};

export const refresh = async (reqData?: AxiosRequestConfig) => {
  // reqData
  const retriedOriginalRequest = new Promise((resolve) => {
    addRefreshSubscriber((access: string) => {
      if (reqData?.headers) {
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
      const token = await refreshToken();
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

  return retriedOriginalRequest;
};
