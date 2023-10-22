import { useEffect, useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';
import { ReducerMap } from '@/utils/react/types/reducer';

/**
 * @param slice createSlice로 생성한 slice 객체
 * @param options.access access 값이 global 일 경우, 외부 slice 상태 변경을 감지하여 리랜더링 할수 있습니다. 지역 컨텍스트에서는 컴포넌트의 언마운트가 될시, 상태가 초기화 되지 않을 수 있으므로 access 옵션을 사용하지 않는것을 권장합니다.
 * @returns [state, dispatch]
 */
export const useSlice = <S, R extends ReducerMap<S, any>>(
  slice: ReturnType<typeof createSlice<S, R>>,
  options?: { access?: 'local' | 'global' },
) => {
  const _slice = options?.access === 'global' ? slice : slice.copy();
  const [state, dispatch] = useReducer(_slice.reducer, _slice.getState());

  useEffect(() => {
    _slice.setState(state);
    const cleanup = _slice.subscribe(() => {
      dispatch({ type: 'RESET', payload: _slice.getState() });
    });
    return () => {
      cleanup();
    };
  }, [_slice, state]);

  return [state, dispatch] as const;
};
