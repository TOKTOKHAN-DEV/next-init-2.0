//@delete:folder
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterStateType {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterStateType = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'COUNTER',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  actions: counterSliceAction, //
  reducer: counterSliceReducer,
} = counterSlice;

export default counterSlice;
