import { useSlice } from '@/hooks/useSlice';

import { createSlice } from '@/utils/react/create-slice';

type GlobalStateType = {
  value: number;
};

const initialState: GlobalStateType = {
  value: 0,
};

export const homeSlice = createSlice({
  initialState,
  reducers: {
    SET_VALUE: (state, payload: number) => {
      state.value = payload;
    },
  },
});

export const useHomePageState = () => {
  const [state, dispatch] = useSlice(homeSlice);

  return { state, dispatch };
};
