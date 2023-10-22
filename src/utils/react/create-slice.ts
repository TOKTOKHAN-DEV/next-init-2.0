import { produce } from 'immer';

import { runIfFn } from '../validate/run-if-fn';
import {
  ActionWithReset,
  CreateReducerParams,
  CreateSliceReturn,
  ReducerMap,
  ReducerWithResetAction,
} from './types/reducer';

export const createSlice = <S, R extends ReducerMap<S, any>>({
  initialState,
  reducers,
}: CreateReducerParams<S, R>): CreateSliceReturn<S, R> => {
  let state = initialState;

  const listeners = new Set<() => void>();

  const reducer: ReducerWithResetAction<S, R> = produce((state, action) => {
    if (action.type === 'RESET') return (action.payload || initialState) as S;
    const reducer = reducers[action.type];
    return reducer(state as S, action.payload);
  }) as ReducerWithResetAction<S, R>;

  const getState = () => state;

  const setState = (next: S | ((prev: S) => S)) => {
    state = runIfFn(next, state);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const copy = () => createSlice({ initialState, reducers });

  const dispatch = (action: ActionWithReset<S, R>) => {
    setState(reducer(state, action));
  };

  return {
    initialState,
    reducers,
    reducer,
    dispatch,
    getState,
    setState,
    subscribe,
    copy,
  };
};
