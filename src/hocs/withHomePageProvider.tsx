import { HomePageProvider } from '@contexts/pages/home/useHomePageContext';

function withHomePageProvider<T extends (props?: any) => JSX.Element | null>(
  Component: T,
) {
  return function WrappedAppComponent(props: Parameter<T>) {
    return (
      <HomePageProvider>
        <Component {...props} />
      </HomePageProvider>
    );
  };
}

export default withHomePageProvider;
