import { SubExampleProvider } from '@/components/Home/components/ContextColorPicker/context/useSubExampleContext';

import { PropsOf } from '@/types/module/react/props-of';

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
