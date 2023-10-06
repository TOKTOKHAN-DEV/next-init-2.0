import { useCallback } from 'react';

import { Colors, useSubExampleState } from './useSubExampleState';

interface useSubExampleHandlersParams
  extends ReturnType<typeof useSubExampleState> {}

export const useSubExampleHandlers = ({
  dispatch,
}: useSubExampleHandlersParams) => {
  const handleColor = useCallback(
    (color: Colors) => {
      dispatch({ type: 'SET_COLOR', payload: color });
    },
    [dispatch],
  );

  return { handleColor };
};
