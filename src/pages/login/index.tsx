import { NextSeo } from 'next-seo';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Login from '@/containers/Login';
import withUnAuthGuard from '@/hocs/withUnAuthGuard';

function LoginPage() {
  return (
    <>
      {/* output: 똑똑한 개발자 | login */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      <NextSeo title="login" />
      <HomeLayout content={<Login />} />
    </>
  );
}

export default withUnAuthGuard(LoginPage);
