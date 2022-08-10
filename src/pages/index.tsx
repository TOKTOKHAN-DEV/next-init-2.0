import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import { ROUTES } from '@constants/routes';

function Home() {
  const router = useRouter();

  // For: Redirect To Starter Docs Page (나중에 꼭 지워주세요)
  React.useEffect(() => {
    router.push(ROUTES.STARTER_DOCS.MAIN);
  }, [router]);

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
