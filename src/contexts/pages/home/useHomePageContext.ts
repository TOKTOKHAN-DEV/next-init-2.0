import { createContextSelector } from '@/utils/react/create-context-selector';

import { useHomePageHandlers } from './hooks/useHomePageHandler';
import { useHomePageState } from './hooks/useHomePageState';

const useHomePage = () => {
  const { state, dispatch } = useHomePageState();
  const handler = useHomePageHandlers({ state, dispatch });

  return { dispatch, state, handler };
};

export const {
  Provider: HomePageProvider, //
  useContext: useHomePageContext,
} = createContextSelector(useHomePage);
