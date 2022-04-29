import constate from 'constate';

import useCounter from './useExample';

export const [ExampleProvider, useExampleContext] = constate(useCounter);

export function withExampleContext<T extends Function>(Component: T) {
  return function WrappedComponent(props: Parameter<T>) {
    return (
      <ExampleProvider>
        <Component {...props} />
      </ExampleProvider>
    );
  };
}
