import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import Content from './_fragments/Content';

export function CounterContainer() {
  return <HomeLayout content={<Content />} />;
}
