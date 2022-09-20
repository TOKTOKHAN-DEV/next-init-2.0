import Head from 'next/head';

import TossPage from '@components/TossPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Toss() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | toss</title>
      </Head>
      <HomeLayout content={<TossPage />} />
    </>
  );
}

export default Toss;
