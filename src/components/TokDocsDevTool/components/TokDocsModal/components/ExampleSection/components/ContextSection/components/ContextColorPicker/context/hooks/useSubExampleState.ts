import { useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';

export type Colors = 'red' | 'blue' | 'orange';
type GlobalStateType = {
  color: Colors;
};

const initialState: GlobalStateType = {
  color: 'blue',
};

const { reducer } = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_COLOR: (state, payload: Colors) => {
      state.color = payload;
    },
  },
});

export const useSubExampleState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
