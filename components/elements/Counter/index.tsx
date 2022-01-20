import HomeLayout from 'components/common/@Layout/HomeLayout';
import Content from './_fragments/Content';

export function CounterContainer() {
  return <HomeLayout content={<Content />} />;
}
