import { useEffect, useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';
import { ReducerMap } from '@/utils/react/types/reducer';

export const useSlice = <S, R extends ReducerMap<S, any>>(
  slice: ReturnType<typeof createSlice<S, R>>,
  options?: { isGlobalSlice: boolean },
) => {
  const _slice = options?.isGlobalSlice ? slice : slice.copy();
  const [state, dispatch] = useReducer(_slice.reducer, _slice.getState());

  useEffect(() => {
    _slice.setState(state);
    const cleanup = _slice.subscribe(() => {
      dispatch({ type: 'RESET', payload: _slice.getState() });
    });
    return () => {
      cleanup();
    };
  }, [_slice, state]);

  return [state, dispatch] as const;
};
