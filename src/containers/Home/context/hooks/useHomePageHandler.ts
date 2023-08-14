import { useCallback } from 'react';

import { useHomePageState } from './useHomePageState';

interface useHomePageHandlersParams
  extends ReturnType<typeof useHomePageState> {}

export const useHomePageHandlers = ({
  state,
  dispatch,
}: useHomePageHandlersParams) => {
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
