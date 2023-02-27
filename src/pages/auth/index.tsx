import Head from 'next/head';

import AuthPage from '@components/AuthPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import withAuthGuard from '@hocs/withAuthGuard';

function Auth() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한개발자 | auth</title>
      </Head>
      <HomeLayout content={<AuthPage />} />
    </>
  );
}

export default withAuthGuard(Auth);
