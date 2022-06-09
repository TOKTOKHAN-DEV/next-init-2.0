import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isOpenMyModal: boolean;
}

const initialState: UserStateType = {
  isOpenMyModal: false,
};

export const modalSlice = createSlice({
  name: 'MODAL',
  initialState,
  reducers: {
    setIsOpenMyModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenMyModal = action.payload;
    },
  },
});

export const {
  actions: modalSliceAction, //
  reducer: modalSliceReducer,
} = modalSlice;

export default modalSlice;
