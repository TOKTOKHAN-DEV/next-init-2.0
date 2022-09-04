import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SocialPage from '@components/SocialPage';

function Social() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | social</title>
      </Head>
      <HomeLayout content={<SocialPage />} />
    </>
  );
}

export default Social;
