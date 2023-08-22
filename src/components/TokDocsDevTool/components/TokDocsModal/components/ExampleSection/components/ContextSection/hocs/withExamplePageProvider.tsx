import { ExamplePageProvider } from '@/components/TokDocsDevTool/components/TokDocsModal/components/ExampleSection/components/ContextSection/context/useExamplePageContext';

import { PropsOf } from '@/types/module/react/props-of';

function withExamplePageProvider<T extends (props?: any) => JSX.Element | null>(
  Component: T,
) {
  return function WrappedAppComponent(props: PropsOf<T>) {
    return (
      <ExamplePageProvider>
        <Component {...props} />
      </ExamplePageProvider>
    );
  };
}

export default withExamplePageProvider;
