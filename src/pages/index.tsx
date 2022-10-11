import Head from 'next/head';
import React from 'react';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Home() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | 메인</title>
      </Head>
      <HomeLayout content={<HomePage />} />
    </>
  );
}

export default Home;
