import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { tokenStorage } from '@utils/web-storage/token';

import { useGlobalState } from './useGlobalState';
import { useWebStorage } from './useWebStorage';

interface useGlobalHandlerParams extends ReturnType<typeof useGlobalState> {
  webStorage: ReturnType<typeof useWebStorage>;
}

export const useGlobalHandler = ({
  state,
  webStorage,
  dispatch,
}: useGlobalHandlerParams) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const log = useCallback(() => {
    console.log({ dispatch, state, webStorage });
  }, [dispatch, state, webStorage]);

  const logout = useCallback(
    (path = '/') => {
      tokenStorage?.remove();
      queryClient.clear();
      router.push(path);
    },
    [queryClient, router],
  );

  return { logout, log };
};
