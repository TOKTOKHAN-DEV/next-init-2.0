import { NextSeo } from 'next-seo';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Auth from '@/containers/Auth';
import withAuthGuard from '@/hocs/withAuthGuard';

function AuthPage() {
  return (
    <>
      {/* output: 똑똑한 개발자 | auth */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      <NextSeo title="auth" />
      <HomeLayout content={<Auth />} />
    </>
  );
}

export default withAuthGuard(AuthPage);
