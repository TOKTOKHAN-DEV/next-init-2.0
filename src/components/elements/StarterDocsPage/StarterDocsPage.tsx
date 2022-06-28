import ExampleLayout from '@components/common/@Layout/layouts/ExampleLayout';

import { CONFIG } from '@config';

import StarterDocsPageContent from './_fragments/StarterDocsPageContent';

function StarterDocsPage() {
  if (CONFIG.ENV === 'production') return null;
  return (
    <ExampleLayout title="Welcome!" content={<StarterDocsPageContent />} />
  );
}

export default StarterDocsPage;
