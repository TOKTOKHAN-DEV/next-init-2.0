/* eslint-disable @typescript-eslint/no-unused-vars */
import useCounter from './useExample';

import constate from 'constate/dist/ts/src';

/**
 * @see https://www.npmjs.com/package/constate
 */

/**
 * Using Simple
 *
 * Custom Hook 을 constate 의 인자로 넘겨줌으로써, 간단히 사용가능합니다.
 *
 * 단, constate 가 받는 값의 상태가 변경되는경우
 * 해당 context를 사용하는 모든 Components 가
 * re-rendering 하게 됩니다.
 */
const [ExampleSimpleProvider, useExampleContext] = constate(useCounter);

/**
 * Using Provider
 *
 * React Context 와 같이 Provider 사용하여, 자식 컴포넌트에게 Context 를 전달해줍니다.
 * constate 의 인자로 받았던 Custom Hook 에 인자가 있다면,
 * Provider Props 로 전달 해 줄수 있습니다.
 */
function App() {
  // Wrap your components with Provider
  return (
    <ExampleProvider initialCount={0}>
      <Child />
    </ExampleProvider>
  );
}

/**
 * Using Context
 *
 * 상위 Component 가 Provider 로 Context 를 전달 해준다면,
 * context를 사용 할 수 있습니다.
 */
function Child() {
  const { count, increment } = useExampleContext();
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

/**
 * Using Selector
 *
 * 두번째 부터의 인자에 Selector 를 넘겨줄 수 있습니다.
 * 넘겨지는 순서대로, 해당 Selector 가 Return 한 값의 Context 를
 * 사용할수 있는 Hook 을 리턴합니다.
 *
 * re-rendering 최적화에 유용합니다.
 * Selector 를 사용하게되면, 사용하는 값이 변경 될시,
 * 각 Selector 가 Return 된 값이 사용되는 Components 만 re-rendering 하게 됩니다.
 */
const [ExampleProvider, useExampleCount, useExampleIncrement] = constate(
  useCounter,
  (value) => value.count, // becomes useExampleCount
  (value) => value.increment, // becomes useExampleIncrement
);

/**
 * Consider HOC Pattern
 *
 * HOC 패턴 사용을 고려해보세요 Context 를 사용하는 컴포넌트가
 * 부모 컴포넌트를 가지기 애매한 경우에 유용합니다.
 */
function withExampleContext<T extends Function>(Component: T) {
  return function WrappedComponent(props: Parameter<T>) {
    return (
      <ExampleProvider>
        <Component {...props} />
      </ExampleProvider>
    );
  };
}

/**
 * Using HOC Pattern
 *
 * 해당 컴포넌트에서 바로 Context 사용이 가능합니다
 */
function ExamplePage() {
  const { count, increment } = useExampleContext();
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

withExampleContext(ExamplePage);
