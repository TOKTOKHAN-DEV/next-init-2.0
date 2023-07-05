import { NextSeo } from 'next-seo';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Login from '@/containers/Login';
import withUnAuthGuard from '@/hocs/withUnAuthGuard';

function LoginPage() {
  return (
    <>
      <NextSeo title="login" />
      <HomeLayout content={<Login />} />
    </>
  );
}

export default withUnAuthGuard(LoginPage);
