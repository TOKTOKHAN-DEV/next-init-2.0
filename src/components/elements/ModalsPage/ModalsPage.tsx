import Head from 'next/head';

import ExampleLayout from '@components/common/@Layout/layouts/ExampleLayout';

import ModalsPageContent from './_fragments/ModalsPageContent';

function ModalsPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | modals</title>
      </Head>
      <ExampleLayout title="모달 예시" content={<ModalsPageContent />} />
    </>
  );
}

export default ModalsPage;
