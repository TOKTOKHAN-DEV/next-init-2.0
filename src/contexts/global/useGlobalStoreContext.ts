import { createContextSelector } from '@utils/react/create-context-selector';

import { useGlobalEffect } from './_hooks/useGlobalEffect';
import { useGlobalHandler } from './_hooks/useGlobalHandler';
import { useGlobalState } from './_hooks/useGlobalState';
import { useWebStorage } from './_hooks/useWebStorage';

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
