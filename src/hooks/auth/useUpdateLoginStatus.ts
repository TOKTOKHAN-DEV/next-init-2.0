import React from 'react';
import { useDispatch } from 'react-redux';

import { userSliceActions } from '@features/user/userSlice';

import { getToken } from '@utils/localStorage/token';

export function useUpdateLoginStatus() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userSliceActions.setIsLogin(!!getToken()?.access));
  }, [dispatch]);
}
