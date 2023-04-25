import { useGlobalState } from './useGlobalState';
import { useWebStorage } from './useWebStorage';

interface useGlobalHandlerParams extends ReturnType<typeof useGlobalState> {
  webStorage: ReturnType<typeof useWebStorage>;
}

export const useGlobalHandler = ({
  dispatch,
  state,
  webStorage,
}: useGlobalHandlerParams) => {
  const example = () => console.log({ dispatch, state, webStorage });
  return { example };
};
