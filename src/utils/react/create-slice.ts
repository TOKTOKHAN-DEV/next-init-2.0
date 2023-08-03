import { produce } from 'immer';

import { ActionsByMap, ReducerMap } from './types/reducer';

type CreateReducerParams<S, R extends ReducerMap<S, any>> = {
  initialState: S;
  reducers: R;
};

export const createSlice = <S, R extends ReducerMap<S, any>>({
  initialState,
  reducers,
}: CreateReducerParams<S, R>) => {
  const reducer = produce((state: S, action: ActionsByMap<S, R>) => {
    const reducer = reducers[action.type];
    return reducer(state, action.payload);
  });
  return { initialState, reducer };
};
