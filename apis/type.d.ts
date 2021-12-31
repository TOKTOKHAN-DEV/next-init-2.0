import { AxiosRequestConfig } from 'axios';
import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from 'react-query';

type OptionalVariables<T> = undefined extends T ? { variables?: T } : { variables: T };

type QueryHookParams<T extends (any?: any) => Promise<any>> = {
  options?: UseQueryOptions<UnboxPromise<ReturnType<T>>>;
} & OptionalVariables<Parameter<T>>;

type InfiniteQueryHookParams<T extends (any?: any) => Promise> = {
  options?: UseInfiniteQueryOptions<UnboxPromise<ReturnType<T>>>;
} & OptionalVariables<Parameter<T>>;

type MutationHookParams<T extends (any?: any) => Promise<any>> = {
  options?: UseMutationOptions<UnboxPromise<ReturnType<T>>, unknown, undefined extends Parameter<T> ? void : Parameter<T>, unknown>;
};

type CustomResponseError = {
  code?: string;
  config?: AxiosRequestConfig;
  response?: {
    config: AxiosRequestConfig;
    data: any;
    headers: Headers;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
  };
};

type PageNationResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
};
