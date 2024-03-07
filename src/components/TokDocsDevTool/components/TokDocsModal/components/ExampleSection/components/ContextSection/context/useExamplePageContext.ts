import { createContextSelector } from '@/utils/react/create-context-selector';

import {
  useExampleAccessAbleSlice,
  useExampleSlice,
} from './hooks/useExampleSlice';

const useExamplePage = () => {
  const [state, dispatch] = useExampleSlice();
  const [accessAbleState, accessAbleDispatch] = useExampleAccessAbleSlice();

  return {
    state,
    dispatch,
    accessAbleState,
    accessAbleDispatch,
  };
};

export const {
  Provider: ExamplePageProvider, //
  useContext: useExamplePageContext,
} = createContextSelector(useExamplePage);
