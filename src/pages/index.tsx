import React from 'react';

import { NextSeo } from 'next-seo';

import HomeLayout from '@/components/@Layout/HomeLayout';
import Home from '@/containers/Home';
import withHomePageProvider from '@/hocs/withHomePageProvider';

function HomePage() {
  return (
    <>
      <NextSeo title="메인" />
      <HomeLayout content={<Home />} />
    </>
  );
}

export default withHomePageProvider(HomePage);
