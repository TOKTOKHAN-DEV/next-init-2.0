import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useQueryClient } from '@tanstack/react-query';

import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

import { tokenStorage } from '@/utils/web-storage/token';

export const useLogin = () => {
  const token = useGlobalContext((ctx) => ctx.webStorage.token);
  const isLogin = !!token;

  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = useCallback(
    (redirect: string | null = '/') => {
      tokenStorage?.remove();
      queryClient.clear();
      if (redirect) router.replace(redirect);
    },
    [queryClient, router],
  );

  return {
    isLogin,
    token,
    logout,
  };
};
