import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Parameter, QueryHookParams } from '../@types/react-query-type';
import { solutionApi } from './Solution.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_SOLUTION_API = {
  LIST: (variables?: Parameter<typeof solutionApi.solutionList>) =>
    ['SOLUTION_LIST', variables].filter((key) => typeof key !== 'undefined'),
};

/**
 * No description
 *
 * @tags solution
 * @name SolutionList
 * @request GET:/v1/solution/
 * @secure
 */
export const useSolutionListQuery = (
  params?: QueryHookParams<typeof solutionApi.solutionList, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_SOLUTION_API.LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => solutionApi.solutionList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};
