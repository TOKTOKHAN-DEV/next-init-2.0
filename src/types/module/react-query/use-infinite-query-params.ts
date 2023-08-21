import { UseInfiniteQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AsyncFn } from '@/types/static/async-fn';
import { AsyncFnReturn } from '@/types/utility/async-fn-return';
import { Parameter } from '@/types/utility/parameter';

import { WrapVariables } from './wrap-variables';

/**
 * @example const useAnyQuery = ({ options, variables } : UseInfiniteQueryParams<typeof anyApiFn>) => {...}
 */

export type UseInfiniteQueryParams<
  T extends AsyncFn,
  Error = AxiosError<any>,
  Data = AsyncFnReturn<T>,
  Variables = Parameter<T>,
> = {
  options?: Omit<
    UseInfiniteQueryOptions<Data, Error, Data, Data, any>,
    'queryKey' | 'queryFn'
  >;
} & WrapVariables<Variables>;
