import { produce } from 'immer';

import { ActionsByMap, ReducerMap } from './types/reducer';

type CreateReducerParams<S, R extends ReducerMap<S, any>> = {
  initialState: S;
  reducers: R;
};

type CreateSliceReturn<S, R extends ReducerMap<S, any>> = {
  initialState: S;
  reducer: (
    state: S,
    action: ActionsByMap<S, R> | { type: 'RESET'; payload?: S },
  ) => S;
  reducers: R;
  getState: () => S;
  setState: (next: S | ((prev: S) => S)) => void;
  subscribe: (listener: () => void) => () => void;
  copy: () => CreateSliceReturn<S, R>;
};

export const createSlice = <S, R extends ReducerMap<S, any>>({
  initialState,
  reducers,
}: CreateReducerParams<S, R>): CreateSliceReturn<S, R> => {
  let state = initialState;

  const listeners = new Set<() => void>();

  const reducer = produce(
    (
      state: S,
      action: ActionsByMap<S, R> | { type: 'RESET'; payload?: S },
    ): S => {
      if (action.type === 'RESET') return (action.payload || initialState) as S;
      const reducer = reducers[action.type];
      return reducer(state, action.payload) as S;
    },
  ) as (
    state: S,
    action: ActionsByMap<S, R> | { type: 'RESET'; payload?: S },
  ) => S;

  const getState = () => state;

  const setState = (next: S | ((prev: S) => S)) => {
    if (typeof next === 'function') {
      state = (next as Function)(state);
    } else {
      state = next;
    }
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const copy = () => createSlice({ initialState, reducers });

  return {
    initialState,
    reducers,
    reducer,
    getState,
    setState,
    subscribe,
    copy,
  };
};
