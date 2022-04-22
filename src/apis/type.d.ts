import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';

import { AxiosError } from 'axios';

export type QueryHookParams<
  T extends CustomRequestFn,
  Data = RequestFnReturn<T>,
  Variables = Parameter<T>,
  Error = MyError,
> = {
  options?: Omit<UseQueryOptions<Data, Error>, 'queryKey' | 'queryFn'>;
} & OptionalVariables<Variables>;

export type InfiniteQueryHookParams<
  T extends CustomRequestFn,
  Data = RequestFnReturn<T>,
  Variables = Parameter<T>,
  Error = MyError,
> = {
  options?: Omit<
    UseInfiniteQueryOptions<Data, Error, Data, Data, any>,
    'queryKey' | 'queryFn'
  >;
} & OptionalVariables<Variables>;

export type MutationHookParams<
  T extends CustomRequestFn,
  Data = RequestFnReturn<T>,
  Variables = Parameter<T>,
  Error = MyError,
> = {
  options?: Omit<
    UseMutationOptions<Data, Error, Variables>,
    'mutationFn' | 'mutationKey'
  >;
};

export type CustomRequestFn = (variables?: any) => Promise<any>;

export type RequestFnReturn<T extends CustomRequestFn> = UnboxPromise<
  ReturnType<T>
>;

export type OptionalVariables<T> = undefined extends T
  ? { variables?: T }
  : { variables: T };

export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

export type Parameter<T> = T extends (param: infer U) => any ? U : never;

export type MyError = AxiosError;
