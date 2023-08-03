import { HomePageProvider } from '@/contexts/pages/home/useHomePageContext';

import { PropsOf } from '@/types/module/react/props-of';

function withHomePageProvider<T extends (props?: any) => JSX.Element | null>(
  Component: T,
) {
  return function WrappedAppComponent(props: PropsOf<T>) {
    return (
      <HomePageProvider>
        <Component {...props} />
      </HomePageProvider>
    );
  };
}

export default withHomePageProvider;
