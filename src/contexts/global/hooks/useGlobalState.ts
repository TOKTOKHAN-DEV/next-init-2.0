import { useSlice } from '@/hooks/useSlice';

import { createSlice } from '@/utils/react/create-slice';

import { ConfirmAlertState } from './types/confirm-alert-state';

export type GlobalStateType = {
  isLogin: null | boolean;
  confirmAlert: ConfirmAlertState;
  count: number;
};

const initialState: GlobalStateType = {
  isLogin: null,
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
    RESET: () => initialState,
    SET_IS_LOGIN: (state, isLogin: boolean) => {
      state.isLogin = isLogin;
    },
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
  const [state, dispatch] = useSlice(globalSlice, { isGlobalSlice: true });

  return { state, dispatch };
};
