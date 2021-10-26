import { useEffect } from 'react';
import { useRouter } from 'next/router';

// import { StorageSetToken } from 'utils/Storage';
// import * as AuthAPI from 'api/Auth';
// console.log(location.search);
//=> '?foo=bar'

// import SignupStore from 'stores/Signup';

const SocialCallbackPage = () => {
  const router = useRouter();
  useEffect(() => {
    const qs = router.query;
    if (qs.error) {
      alert('소셜로그인 중 오류가 발생했습니다.');
      return;
    }
    // AuthAPI.socialLogin(qs).then(async (res) => {
    //   const { access, refresh, isRegister } = res?.data;
    //   if (isRegister) {
    //     StorageSetToken(access, refresh);
    //     Router.push("/");
    //   } else {
    //     SignupStore.access = access;
    //     Router.push("/signup/1");
    //   }
    // });
  });
  return null;
};

export default SocialCallbackPage;
