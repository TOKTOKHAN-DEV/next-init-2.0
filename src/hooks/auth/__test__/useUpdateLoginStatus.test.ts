import { useDispatch } from 'react-redux';

import { userSliceActions } from '@features/user/userSlice';

import { renderHook } from '@testing-library/react';
import { getToken } from '@utils/localStorage/token';

import { useUpdateLoginStatus } from '../useUpdateLoginStatus';

type MockedFn<T extends (...params: any) => any> = jest.Mock &
  ((...args: Parameters<T>) => ReturnType<T>);

const __useDispatch = useDispatch as MockedFn<typeof useDispatch>;
const __getToken = getToken as MockedFn<typeof getToken>;
const __dispatch = jest.fn();
__useDispatch.mockReturnValue(__dispatch);

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
jest.mock('@utils/localStorage/token', () => ({
  getToken: jest.fn(),
}));

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
