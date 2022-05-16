import { useQuery } from 'react-query';

import { QueryHookParams } from '@apis/type';

import exampleApi from './ExampleApi';
import { ExampleParamGetType } from './ExampleApi.type';

export const EXAMPLE_API_QUERY_KEY = {
  GET: (param?: ExampleParamGetType) => ['example-list', param],
  GET_BY_ID: (id?: string) => ['example-by-id', id],
};

export function useGetExampleListQuery(
  params?: QueryHookParams<typeof exampleApi.getExampleList>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => exampleApi.getExampleList(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetExampleByIdQuery(
  params: QueryHookParams<typeof exampleApi.getExampleById>,
) {
  const queryKey = EXAMPLE_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => exampleApi.getExampleById(params?.variables),
    params?.options,
  );

  return { ...query, queryKey };
}
