import { useCallback } from 'react';

import { useExamplePageState } from './useExamplePageState';

interface useExamplePageHandlersParams
  extends ReturnType<typeof useExamplePageState> {}

export const useExamplePageHandlers = ({
  state,
  dispatch,
}: useExamplePageHandlersParams) => {
  const logExample = useCallback(() => {
    console.log('example', { dispatch, state });
  }, [dispatch, state]);

  const increaseValue = useCallback(() => {
    dispatch({ type: 'SET_VALUE', payload: state.value + 1 });
  }, [dispatch, state.value]);

  const decreaseValue = useCallback(() => {
    dispatch({ type: 'SET_VALUE', payload: state.value - 1 });
  }, [dispatch, state.value]);

  return { logExample, increaseValue, decreaseValue };
};
