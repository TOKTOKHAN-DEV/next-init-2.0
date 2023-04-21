import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { UseInfiniteQueryParams } from '@/types/module/react-query/use-infinite-query-params';
import { UseQueryParams } from '@/types/module/react-query/use-query-params';
import { Parameter } from '@/types/utility/parameter';
import { isNotNull } from '@/utils/validate/is-not-null';

import exampleApi from './ExampleApi';

export const EXAMPLE_API_QUERY_KEY = {
  GET_LIST: (params?: Parameter<typeof exampleApi.getList>) =>
    ['example-list', params].filter(isNotNull),
  GET_LIST_PAGINATED: (
    params?: Parameter<typeof exampleApi.getListPaginated>,
  ) => ['example-list-paginated', params].filter(isNotNull),
  GET_BY_ID: (params?: Parameter<typeof exampleApi.getById>) =>
    ['example-by-id', params].filter(isNotNull),
};

export function useGetExampleListQuery(
  params?: UseQueryParams<typeof exampleApi.getList>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET_LIST(params?.variables);
  return useQuery(
    queryKey,
    () => exampleApi.getList(params?.variables),
    params?.options,
  );
}

export function useGetExampleListInfiniteQuery(
  params?: UseInfiniteQueryParams<typeof exampleApi.getListPaginated>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET_LIST_PAGINATED(params?.variables);
  return useInfiniteQuery(
    queryKey,
    ({ pageParam = null }) =>
      exampleApi.getListPaginated({ ...params?.variables, cursor: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.next,
      ...params?.options,
    },
  );
}

export function useGetExampleByIdQuery(
  params: UseQueryParams<typeof exampleApi.getById>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET_BY_ID(params?.variables);
  return useQuery(
    queryKey,
    () => exampleApi.getById(params?.variables),
    params?.options,
  );
}
