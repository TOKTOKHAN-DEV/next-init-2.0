import { userSliceActions } from '@features/user/userSlice';

import { renderHook } from '@testing-library/react';
import { __dispatch, __getToken } from '@utils/test/setupTest';

import { useUpdateLoginStatus } from '../useUpdateLoginStatus';

describe('useUpdateLoginStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call setIsLogin with true if access token exists', () => {
    __getToken.mockReturnValue({ access: 'mock-access-token' });
    renderHook(() => useUpdateLoginStatus());
    expect(__dispatch).toHaveBeenCalledWith(userSliceActions.setIsLogin(true));
  });

  it('should call setIsLogin with false if access token does not exist', () => {
    __getToken.mockReturnValue(null);
    renderHook(() => useUpdateLoginStatus());
    expect(__dispatch).toHaveBeenCalledWith(userSliceActions.setIsLogin(false));
  });
});
