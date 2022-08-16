import Head from 'next/head';

import HomeLayout from '@components/common/@Layout/HomeLayout';

import LodashPageContent from './_fragments/LodashPageContent';

function LodashPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | lodash</title>
      </Head>
      <HomeLayout content={<LodashPageContent />} />
    </>
  );
}

export default LodashPage;
