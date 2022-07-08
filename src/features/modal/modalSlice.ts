import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isOpenGlobalModal: boolean;
}

const initialState: UserStateType = {
  isOpenGlobalModal: false,
};

export const modalSlice = createSlice({
  name: 'MODAL',
  initialState,
  reducers: {
    setIsOpenGlobalModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenGlobalModal = action.payload;
    },
  },
});

export const {
  actions: modalSliceAction, //
  reducer: modalSliceReducer,
} = modalSlice;

export default modalSlice;
