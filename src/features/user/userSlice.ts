import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isLogged: boolean;
}

const initialState: UserStateType = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});

export const {
  actions: userSliceActions, //
  reducer: userSliceReducer,
} = userSlice;

export default userSlice;
