import { TypedUseSelectorHook, useSelector } from 'react-redux';

import store from './store';

export type AppStoreType = ReturnType<typeof store.getState>;

const useAppStore: TypedUseSelectorHook<AppStoreType> = (
  selector,
  equalityFn,
) => {
  return useSelector(selector, equalityFn);
};

export default useAppStore;
