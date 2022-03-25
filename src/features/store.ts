import { configureStore } from '@reduxjs/toolkit';

import counterSlice from 'src/features/Count/counterSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
