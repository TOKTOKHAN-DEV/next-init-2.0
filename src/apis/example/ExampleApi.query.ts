import { UseInfiniteQueryParams } from '@/types/module/react-query/use-infinite-query-params';
import { UseQueryParams } from '@/types/module/react-query/use-query-params';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { isNotNull } from '@utils/validate/is-not-null';

import exampleApi from './ExampleApi';
import { GetExampleDto } from './types/dto/get-example-dto';

export const EXAMPLE_API_QUERY_KEY = {
  GET: (param?: Parameters<typeof exampleApi.getList>) =>
    ['example-list', param].filter(isNotNull),
  GET_PAGINATED: (param?: GetExampleDto) =>
    ['example-list-paginated', param].filter(isNotNull),
  GET_BY_ID: (id?: string) => ['example-by-id', id].filter(isNotNull),
};

export function useGetExampleListQuery(
  params?: UseQueryParams<typeof exampleApi.getList>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET();
  return useQuery(queryKey, () => exampleApi.getList(), params?.options);
}

export function useGetExampleListInfiniteQuery(
  params?: UseInfiniteQueryParams<typeof exampleApi.getListPaginated>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET_PAGINATED();
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
