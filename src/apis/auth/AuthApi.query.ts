import { useQuery } from 'react-query';

import { QueryHookParams } from '@apis/type';

import authController from './AuthApi.controller';

export const AUTH_API_QUERY_KEY = {
  REFRESH_TOKEN: () => ['refresh-token'],
};

export function useRefreshTokenQuery(
  params?: QueryHookParams<typeof authController.refreshToken>,
) {
  const queryKey = AUTH_API_QUERY_KEY.REFRESH_TOKEN();
  const query = useQuery(
    queryKey,
    () => authController.refreshToken(),
    params?.options,
  );
  return { ...query, queryKey };
}
