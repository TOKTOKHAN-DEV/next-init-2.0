import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import Content from './_fragments/ExamplesPageContent';

function ExamplesPage() {
  return <HomeLayout content={<Content />} />;
}

export default ExamplesPage;
