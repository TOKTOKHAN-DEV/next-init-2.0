import { createContextSelector } from '@utils/react/create-context-selector';

import { useHomePageHandlers } from './_hooks/useHomePageHandler';
import { useHomePageState } from './_hooks/useHomePageState';

const useHomePage = () => {
  const { state, dispatch } = useHomePageState();
  const handler = useHomePageHandlers({ state, dispatch });

  return { dispatch, state, handler };
};

export const {
  Provider: HomePageProvider, //
  useContext: useHomePageContext,
} = createContextSelector(useHomePage);
