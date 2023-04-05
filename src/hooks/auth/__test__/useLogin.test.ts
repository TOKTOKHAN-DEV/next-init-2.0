import { userSliceActions } from '@features/user/userSlice';

import { renderHook } from '@testing-library/react';
import {
  __deleteToken,
  __dispatch,
  __useAppStore,
  __useDispatch,
  __useQueryClient,
  __useRouter,
} from '@utils/test/setupTest';

import { useLogin } from '../useLogin';

describe('useLogin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return isLogin as true when the user is logged in', () => {
    __useAppStore.mockReturnValue(true);
    const { result } = renderHook(() => useLogin());

    expect(result.current.isLogin).toBe(true);
  });

  it('should return isLogin as false when the user is not logged in', () => {
    __useAppStore.mockReturnValue(false);
    const { result } = renderHook(() => useLogin());

    expect(result.current.isLogin).toBe(false);
  });

  it('should clear the query cache and redirect to the given URL after logging out', () => {
    const redirect = '/login';
    const __replace = jest.fn();
    __useRouter.mockReturnValue({ replace: __replace });
    __useDispatch.mockReturnValue(__dispatch);

    const __clear = jest.fn();
    __useQueryClient.mockReturnValue({ clear: __clear });

    const { result } = renderHook(() => useLogin());

    result.current.logout(redirect);

    expect(__deleteToken).toHaveBeenCalled();
    expect(__dispatch).toHaveBeenCalledWith(userSliceActions.setIsLogin(false));
    expect(__clear).toHaveBeenCalled();
    expect(__replace).toHaveBeenCalledWith(redirect);
  });

  it('should clear the query cache and redirect to the home URL after logging out when no redirect URL is provided', () => {
    const __replace = jest.fn();
    __useRouter.mockReturnValue({ replace: __replace });
    __useDispatch.mockReturnValue(__dispatch);
    const __clear = jest.fn();
    __useQueryClient.mockReturnValue({ clear: __clear });

    const { result } = renderHook(() => useLogin());

    result.current.logout();

    expect(__deleteToken).toHaveBeenCalled();
    expect(__dispatch).toHaveBeenCalledWith(userSliceActions.setIsLogin(false));
    expect(__clear).toHaveBeenCalled();
    expect(__replace).toHaveBeenCalledWith('/');
  });
});
