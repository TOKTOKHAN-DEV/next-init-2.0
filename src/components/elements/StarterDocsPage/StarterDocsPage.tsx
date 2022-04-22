import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import { CONFIG } from '@config';

import StarterDocsPageContent from './_fragments/StarterDocsPageContent';

function StarterDocsPage() {
  if (CONFIG.ENV === 'production') return null;
  return <HomeLayout content={<StarterDocsPageContent />} />;
}

export default StarterDocsPage;
