import HomeLayout from '@components/common/@Layout/layouts/HomeLayout';

import Content from './_fragments/Content';

function CounterContainer() {
  return <HomeLayout content={<Content />} />;
}

export default CounterContainer;
