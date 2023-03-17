import { ComponentProps, ComponentType } from 'react';

import constate from 'constate';

import useCounter from './useExample';

export const [ExampleProvider, useExampleContext] = constate(useCounter);

export function withExampleContext<T extends ComponentType<any>>(Component: T) {
  return function WrappedComponent(props: ComponentProps<T>) {
    return (
      <ExampleProvider>
        <Component {...props} />
      </ExampleProvider>
    );
  };
}
