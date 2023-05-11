import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  InfiniteQueryHookParams,
  Parameter,
  QueryHookParams,
} from '../@types/react-query-type';
import { outsourcingApi } from './Outsourcing.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_OUTSOURCING_API = {
  LIST: (variables?: Parameter<typeof outsourcingApi.outsourcingList>) =>
    ['OUTSOURCING_LIST', variables].filter((key) => typeof key !== 'undefined'),
  LIST_INFINITE: (
    variables?: Parameter<typeof outsourcingApi.outsourcingList>,
  ) =>
    ['OUTSOURCING_LIST_INFINITE', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
};

/**
 * No description
 *
 * @tags outsourcing
 * @name OutsourcingList
 * @request GET:/v1/outsourcing/
 * @secure
 */
export const useOutsourcingListQuery = (
  params?: QueryHookParams<
    typeof outsourcingApi.outsourcingList,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_OUTSOURCING_API.LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => outsourcingApi.outsourcingList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * No description
 *
 * @tags outsourcing
 * @name OutsourcingList
 * @request GET:/v1/outsourcing/
 * @secure
 */
export const useOutsourcingListInfiniteQuery = (
  params?: InfiniteQueryHookParams<
    typeof outsourcingApi.outsourcingList,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_OUTSOURCING_API.LIST_INFINITE(params?.variables);

  const result = useInfiniteQuery(
    queryKey,
    ({ pageParam = 0 }) => {
      return outsourcingApi.outsourcingList({
        ...params?.variables,
        query: { ...params?.variables?.query, cursor: pageParam },
      });
    },
    {
      getNextPageParam: (lastPage) => {
        const params = lastPage.next
          ? new URL(lastPage.next).searchParams
          : null;
        const cursor = params ? params.get('cursor') : null;
        return cursor;
      },
      ...params?.options,
    },
  );

  return { ...result, queryKey };
};
