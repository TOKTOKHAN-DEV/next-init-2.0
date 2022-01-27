import Axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { BASE_URL } from 'config';

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL });

export const useCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  // const token = useToken() // Do what you want
  const token = '';

  return (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const headers: AxiosRequestHeaders = {};
    if (token) headers.Authorazation = `Bearer ${token}`;
    // promise.cancel = () => {
    //   source.cancel('Query was cancelled by React Query');
    // };

    return AXIOS_INSTANCE({
      ...config,
      headers,
      cancelToken: source.token,
    }).then(({ data }) => data);
  };
};

export default useCustomInstance;

export type ErrorType<Error> = AxiosError<Error>;
