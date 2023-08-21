import { PropsOf } from '@/types/module/react/props-of';

import { SubExampleProvider } from '../context/useSubExampleContext';

function withColorPickerProvider<T extends (props?: any) => JSX.Element | null>(
  Component: T,
) {
  return function WrappedAppComponent(props: PropsOf<T>) {
    return (
      <SubExampleProvider>
        <Component {...props} />
      </SubExampleProvider>
    );
  };
}

export default withColorPickerProvider;
