import { useSlice } from '@/hooks/useSlice';

import { createSlice } from '@/utils/react/create-slice';

import { ConfirmAlertState } from './types/confirm-alert-state';

export type GlobalStateType = {
  confirmAlert: ConfirmAlertState;
  count: number;
};

const initialState: GlobalStateType = {
  count: 0,
  confirmAlert: {
    isOpen: false,
    title: null,
    description: null,
    onCancel: null,
    onConfirm: null,
  },
};

export const globalSlice = createSlice({
  initialState,
  reducers: {
    SET_COUNT: (state, count: number) => {
      state.count = count;
    },
    CLEAN_UP_CONFIRM_ALERT: (state) => {
      state.confirmAlert = initialState.confirmAlert;
    },
    SET_CONFIRM_ALERT: (state, confirmAlert: Partial<ConfirmAlertState>) => {
      const merged = { ...state.confirmAlert, ...confirmAlert };
      state.confirmAlert = merged;
    },
  },
});

export const useGlobalState = () => {
  const [state, dispatch] = useSlice(globalSlice, { access: 'global' });

  return { state, dispatch };
};
