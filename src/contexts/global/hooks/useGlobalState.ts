import { useReducer } from 'react';

import { createSlice } from '@utils/react/create-slice';

type GlobalStateType = {
  isLogin: null | boolean;
  value: number;
};

const initialState: GlobalStateType = {
  value: 0,
  isLogin: null,
};

const { reducer } = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_IS_LOGIN: (state, isLogin: boolean) => ({ ...state, isLogin }),
    SET_VALUE: (state, value: number) => ({ ...state, value }),
  },
});

export const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
