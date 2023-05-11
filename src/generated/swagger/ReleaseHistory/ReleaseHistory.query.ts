import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Parameter, QueryHookParams } from '../@types/react-query-type';
import { releaseHistoryApi } from './ReleaseHistory.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_RELEASE_HISTORY_API = {
  LINK_RETRIEVE: (
    variables?: Parameter<typeof releaseHistoryApi.releaseHistoryLinkRetrieve>,
  ) =>
    ['RELEASE_HISTORY_LINK_RETRIEVE', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
};

/**
 * No description
 *
 * @tags release_history
 * @name ReleaseHistoryLinkRetrieve
 * @request GET:/v1/release_history/link/
 * @secure
 */
export const useReleaseHistoryLinkRetrieveQuery = (
  params?: QueryHookParams<
    typeof releaseHistoryApi.releaseHistoryLinkRetrieve,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_RELEASE_HISTORY_API.LINK_RETRIEVE(
    params?.variables,
  );
  const result = useQuery(
    queryKey,
    () => releaseHistoryApi.releaseHistoryLinkRetrieve(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};
