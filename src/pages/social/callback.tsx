// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { userSliceActions } from '@features/user/userSlice';

// import { setToken } from '@utils/localStorage/token';
// import { decodeOAuthState } from '@utils/social';

// import Splash from '@components/common/Splash';
// import { useUserSocialLoginMutation } from '@apis/user/UserApi.mutation';

function SocialCallback() {
  //   const router = useRouter();
  //   const dispatch = useDispatch();
  //   const { mutate } = useUserSocialLoginMutation({
  //     options: {
  //       onSuccess: (res) => {
  //         setToken(res);
  //         dispatch(userSliceActions.setIsLogin(true));
  //         const returnUrl =
  //           decodeOAuthState(router.query.state)?.returnUrl || '/';
  //         router.replace(returnUrl);
  //       },
  //       onError: () => {
  //         dispatch(userSliceActions.setIsLogin(false));
  //         router.replace('/');
  //       },
  //     },
  //   });
  //   useEffect(() => {
  //     const { code, state } = router.query;
  //     const parsed = decodeOAuthState(state);
  //     if (code && parsed) {
  //       mutate({
  //         code: String(code),
  //         state: String(parsed.type),
  //       });
  //     }
  //   }, [mutate, router]);
  //   return <Splash />;
}

export default SocialCallback;
