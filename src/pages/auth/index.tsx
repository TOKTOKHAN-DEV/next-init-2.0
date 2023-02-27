import Head from 'next/head';

import AuthPage from '@components/AuthPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Auth() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>POSTOO | auth</title>
      </Head>
      <HomeLayout content={<AuthPage />} />
    </>
  );
}

export default Auth;
