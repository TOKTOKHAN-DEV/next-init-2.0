import { useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';

type GlobalStateType = {
  value: number;
};

const initialState: GlobalStateType = {
  value: 0,
};

const { reducer } = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_VALUE: (state, payload: number) => {
      state.value = payload;
    },
  },
});

export const useHomePageState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
