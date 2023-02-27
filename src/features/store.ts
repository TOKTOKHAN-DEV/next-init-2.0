//@delete:line
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import counterSlice from '@features/counter/counterSlice';
import modalSlice from '@features/modal/modalSlice';
import userSlice from '@features/user/userSlice';

import { configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {
      //@delete:line
      [counterSlice.name]: counterSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
  });
}

const store = makeStore();

export type AppStoreType = ReturnType<typeof store.getState>;

export const useAppStore: TypedUseSelectorHook<AppStoreType> = (
  selector,
  equalityFn,
) => {
  return useSelector(selector, equalityFn);
};

export default store;
