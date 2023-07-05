import { NextSeo } from 'next-seo';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Auth from '@/containers/Auth';
import withAuthGuard from '@/hocs/withAuthGuard';

function AuthPage() {
  return (
    <>
      <NextSeo title="auth" />
      <HomeLayout content={<Auth />} />
    </>
  );
}

export default withAuthGuard(AuthPage);
