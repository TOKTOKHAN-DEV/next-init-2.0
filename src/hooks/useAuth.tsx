import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userSliceActions } from '@features/user/userSlice';

const REFRESH_TOKEN_LIFE_TIME = 1000 * 60 * 60;

const useAuth = () => {
  const dispatch = useDispatch();

  // TODO: refresh token mutation hook
  // const userRefreshCreate = useUserRefreshCreate({
  //   mutation: {
  //     onSuccess: (res) => {
  //       dispatch(userSliceActions.setIsLogged(true));
  //       localStorage.setItem('@token', JSON.stringify(res));
  //     },
  //     onError: (err) => {
  //       dispatch(userSliceActions.setIsLogged(false));
  //       localStorage.removeItem('@token');
  //     },
  //   },
  // });

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem('@token') ??
      JSON.stringify({ access: '', refresh: '' })
    );
    if (token.refresh) {
      // TODO: refresh token mutation hook
      // userRefreshCreate.mutate({
      //   data: { refresh: token.refresh } as UserRefreshSchema,
      // });
      // const removeInterval = setInterval(() => {
      //   userRefreshCreate.mutate({
      //     data: { refresh: token.refresh } as UserRefreshSchema,
      //   });
      // }, REFRESH_TOKEN_LIFE_TIME - 1000 * 60 * 10);
      // return () => clearInterval(removeInterval);
    }
    dispatch(userSliceActions.setIsLogged(false));
  }, []);
}

export default useAuth
