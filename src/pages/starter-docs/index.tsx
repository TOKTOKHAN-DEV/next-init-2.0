//@delete:folder
import StarterDocsPage from '@components/StarterDocsPage';
import ExampleLayout from '@components/common/@Layout/ExampleLayout';

import { CONFIG } from '@config';

function StarterDocs() {
  if (CONFIG.ENV === 'production') return null;
  return <ExampleLayout title="Welcome!" content={<StarterDocsPage />} />;
}

export default StarterDocs;
