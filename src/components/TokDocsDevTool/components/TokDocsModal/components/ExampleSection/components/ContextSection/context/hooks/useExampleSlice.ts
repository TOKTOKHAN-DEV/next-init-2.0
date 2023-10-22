import { useSlice } from '@/hooks/useSlice';

import { createSlice } from '@/utils/react/create-slice';

type GlobalStateType = {
  value: number;
};

const initialState: GlobalStateType = {
  value: 0,
};

export const exampleSlice = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_VALUE: (state, payload: number) => {
      state.value = payload;
    },
    INCREASE_VALUE: (state, payload: number) => {
      state.value += payload;
    },
    DECREASE_VALUE: (state, payload: number) => {
      state.value -= payload;
    },
  },
});

/**
 * 지역 컨텍스트에선 isGlobalSlice 옵션을 사용하지 않는것을 권장합니다.
 */
export const useExampleAccessAbleSlice = () => {
  return useSlice(exampleSlice, { access: 'global' });
};

export const useExampleSlice = () => {
  return useSlice(exampleSlice);
};
