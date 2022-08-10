import Head from 'next/head';

import ModalsPage from '@components/ModalsPage';
import ExampleLayout from '@components/common/@Layout/ExampleLayout';

function Modals() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | modals</title>
      </Head>
      <ExampleLayout title="모달 예시" content={<ModalsPage />} />
    </>
  );
}

export default Modals;
