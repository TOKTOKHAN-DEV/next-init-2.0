import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Auth from '@/containers/Auth';
import withAuthGuard from '@/hocs/withAuthGuard';

function AuthPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한개발자 | auth</title>
      </Head>
      <HomeLayout content={<Auth />} />
    </>
  );
}

export default withAuthGuard(AuthPage);
