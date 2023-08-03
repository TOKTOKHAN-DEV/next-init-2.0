import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useQueryClient } from '@tanstack/react-query';

import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

import { tokenStorage } from '@/utils/web-storage/token';

export const useLogin = () => {
  const isLogin = useGlobalContext((ctx) => ctx.state.isLogin);
  const token = useGlobalContext((ctx) => ctx.webStorage.token);

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
