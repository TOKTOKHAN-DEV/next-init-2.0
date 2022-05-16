import counterSlice from '@features/counter/counterSlice';
import userSlice from '@features/user/userSlice';

import { configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;
