// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { userSliceActions } from '@features/user/userSlice';

// import { deleteToken, getToken, setToken } from '@utils/localStorage/token';

// import { useUserRefreshCreateMutation } from 'generated/apis/User/User.query';

// const REFRESH_TOKEN_LIFE_TIME = 1000 * 60 * 60;

const useRefreshInterval = () => {
  // const dispatch = useDispatch();
  // const { mutate } = useUserRefreshCreateMutation({
  //   options: {
  //     onSuccess: (res) => {
  //       setToken(res);
  //       dispatch(userSliceActions.setIsLogin(true));
  //     },
  //     onError: () => {
  //       deleteToken();
  //       dispatch(userSliceActions.setIsLogin(false));
  //     },
  //   },
  // });
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token?.refresh) return;
  //
  //   mutate({ data: { refresh: token.refresh } });
  //   const refreshInterval = setInterval(() => {
  //     mutate({ data: { refresh: token.refresh } });
  //   }, REFRESH_TOKEN_LIFE_TIME - 1000 * 60 * 10);
  //   return () => clearInterval(refreshInterval);
  // }, [dispatch, mutate]);
};

export default useRefreshInterval;
