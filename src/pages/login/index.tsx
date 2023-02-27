import Head from 'next/head';

import LoginPage from '@components/LoginPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Login() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>POSTOO | login</title>
      </Head>
      <HomeLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
