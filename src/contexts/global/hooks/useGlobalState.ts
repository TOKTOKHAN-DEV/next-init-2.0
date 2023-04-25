import { useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';

import { ConfirmAlertState } from './types/confirm-alert-state';

export type GlobalStateType = {
  isLogin: null | boolean;
  confirmAlert: ConfirmAlertState;
};

const initialState: GlobalStateType = {
  isLogin: null,
  confirmAlert: {
    isOpen: false,
    title: null,
    description: null,
    onCancel: null,
    onConfirm: null,
  },
};

const { reducer } = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_IS_LOGIN: (state, isLogin: boolean) => {
      state.isLogin = isLogin;
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
