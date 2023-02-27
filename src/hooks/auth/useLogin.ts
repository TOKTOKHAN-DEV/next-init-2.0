import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

import { useAppStore } from '@features/store';
import { userSliceActions } from '@features/user/userSlice';

import { useQueryClient } from '@tanstack/react-query';
import { deleteToken } from '@utils/localStorage/token';

export function useLogin() {
  const isLogin = useAppStore((store) => store.USER.isLogin);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = React.useCallback(
    (redirect: string | null = '/') => {
      deleteToken();
      dispatch(userSliceActions.setIsLogin(false));
      queryClient.clear();
      if (redirect) router.replace(redirect);
    },
    [dispatch, queryClient, router],
  );

  return {
    isLogin,
    logout,
  };
}
