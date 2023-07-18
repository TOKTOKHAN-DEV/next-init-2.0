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

  return { logExample };
};
