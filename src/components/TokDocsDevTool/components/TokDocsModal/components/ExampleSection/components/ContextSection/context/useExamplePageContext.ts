import { createContextSelector } from '@/utils/react/create-context-selector';

import { useExamplePageHandlers } from './hooks/useExamplePageHandlers';
import { useExamplePageState } from './hooks/useExamplePageState';

const useExamplePage = () => {
  const { state, dispatch } = useExamplePageState();
  const handler = useExamplePageHandlers({ state, dispatch });

  return { dispatch, state, handler };
};

export const {
  Provider: ExamplePageProvider, //
  useContext: useExamplePageContext,
} = createContextSelector(useExamplePage);
