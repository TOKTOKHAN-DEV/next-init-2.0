import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isLogin: boolean;
}

const initialState: UserStateType = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const {
  actions: userSliceActions, //
  reducer: userSliceReducer,
} = userSlice;

export default userSlice;
