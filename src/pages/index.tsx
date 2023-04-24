import React from 'react';

import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Home from '@/containers/Home';
import withHomePageProvider from '@/hocs/withHomePageProvider';

function HomePage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | 메인</title>
      </Head>
      <HomeLayout content={<Home />} />
    </>
  );
}

export default withHomePageProvider(HomePage);
