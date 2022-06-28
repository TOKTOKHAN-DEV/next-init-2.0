import ExampleLayout from '@components/common/@Layout/layouts/ExampleLayout';

import Content from './_fragments/ExamplesPageContent';

function ExamplesPage() {
  return <ExampleLayout title="참고할 예시 페이지" content={<Content />} />;
}

export default ExamplesPage;
