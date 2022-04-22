import { useRouter } from 'next/dist/client/router';
import React from 'react';

import HomeLayout from '@components/common/@Layout/layouts/HomeLayout/HomeLayout';

import { ROUTES } from '@constants/routes';

import HomePageContent from './_fragments/HomePageContent';

function HomePage() {
  const router = useRouter();

  // For: Redirect To Starter Docs Page (나중에 꼭 지워주세요)
  React.useEffect(() => {
    router.push(ROUTES.STARTER_DOCS.MAIN);
  }, [router]);

  return <HomeLayout content={<HomePageContent />} />;
}

export default HomePage;
