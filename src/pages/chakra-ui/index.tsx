import Head from 'next/head';

import HomeLayout from '@/components/@Layout/HomeLayout';
import ChakraUi from '@/containers/ChakraUi';

function ChakraUiPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | chakra-ui</title>
      </Head>
      <HomeLayout content={<ChakraUi />} />
    </>
  );
}

export default ChakraUiPage;
