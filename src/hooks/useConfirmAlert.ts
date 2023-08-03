import { useCallback } from 'react';

import { ConfirmAlertState } from '@/contexts/global/hooks/types/confirm-alert-state';
import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

export const useConfirmAlert = () => {
  const state = useGlobalContext((ctx) => ctx.state.confirmAlert);
  const dispatch = useGlobalContext((ctx) => ctx.dispatch);

  const openAlert = useCallback(
    (params: Partial<Omit<ConfirmAlertState, 'isOpen'>>) => {
      dispatch({
        type: 'SET_CONFIRM_ALERT',
        payload: { ...params, isOpen: true },
      });
    },
    [dispatch],
  );

  const cleanup = useCallback(() => {
    dispatch({
      type: 'CLEAN_UP_CONFIRM_ALERT',
    });
  }, [dispatch]);

  return {
    state,
    openAlert,
    cleanup,
  };
};
