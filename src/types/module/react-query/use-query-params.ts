import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AsyncFn } from '@/types/static/async-fn';
import { AsyncFnReturn } from '@/types/utility/async-fn-return';
import { Parameter } from '@/types/utility/parameter';

import { WrapVariables } from './wrap-variables';

/**
 * @example const useAnyQuery = ({ options, variables } : UseInfiniteQueryParams<typeof anyApiFn>) => {...}
 */

export type UseQueryParams<
  T extends AsyncFn,
  Error = AxiosError<any>,
  Data = AsyncFnReturn<T>,
  Variables = Parameter<T>,
> = {
  options?: Omit<UseQueryOptions<Data, Error>, 'queryKey' | 'queryFn'>;
} & WrapVariables<Variables>;
