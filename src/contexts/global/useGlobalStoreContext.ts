import { createContextSelector } from '@/utils/react/create-context-selector';

import { useGlobalEffect } from './hooks/useGlobalEffect';
import { useGlobalHandler } from './hooks/useGlobalHandler';
import { useGlobalState } from './hooks/useGlobalState';
import { useWebStorage } from './hooks/useWebStorage';

const useGlobalStore = () => {
  const { state, dispatch } = useGlobalState();
  const webStorage = useWebStorage();
  const handler = useGlobalHandler({ state, webStorage, dispatch });

  useGlobalEffect({ state, webStorage, handler, dispatch });

  return { dispatch, state, webStorage, handler };
};

export const {
  Provider: GlobalStoreProvider, //
  useContext: useGlobalContext,
} = createContextSelector(useGlobalStore);
