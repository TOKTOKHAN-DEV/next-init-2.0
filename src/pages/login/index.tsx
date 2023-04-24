import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Login from '@/containers/Login';
import withUnAuthGuard from '@/hocs/withUnAuthGuard';

function LoginPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한개발자 | login</title>
      </Head>
      <HomeLayout content={<Login />} />
    </>
  );
}

export default withUnAuthGuard(LoginPage);
