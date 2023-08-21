import { createContextSelector } from '@/utils/react/create-context-selector';

import { useSubExampleHandlers } from './hooks/useSubExampleHandler';
import { useSubExampleState } from './hooks/useSubExampleState';

const useSubExample = () => {
  const { state, dispatch } = useSubExampleState();
  const handler = useSubExampleHandlers({ state, dispatch });

  return { dispatch, state, handler };
};

export const {
  Provider: SubExampleProvider, //
  useContext: useSubExampleContext,
} = createContextSelector(useSubExample);
