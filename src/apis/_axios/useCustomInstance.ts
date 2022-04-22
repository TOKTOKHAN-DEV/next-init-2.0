import { AxiosError, AxiosRequestConfig } from 'axios';

import instance from './instance';

export const useCustomInstance = <T>(): ((
  config: AxiosRequestConfig,
) => Promise<T>) => {
  return (config: AxiosRequestConfig) => {
    return instance({
      ...config,
    }).then(({ data }) => data);
  };
};

export type ErrorType<Error> = AxiosError<Error>;
