import Head from 'next/head';

import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import ScrollTestPageContent from './_fragments/ScrollTestPageContent';

function ScrollTestPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | scroll-test</title>
      </Head>
      <HomeLayout content={<ScrollTestPageContent />} />
    </>
  );
}

export default ScrollTestPage;
