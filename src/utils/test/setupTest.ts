import { useRouter } from 'next/router';

import { useGlobalContext } from '@contexts/global/useGlobalStoreContext';

import { useQueryClient } from '@tanstack/react-query';
import { deleteToken, getToken } from '@utils/localStorage/token';

jest.mock('@utils/localStorage/token', () => ({
  getToken: jest.fn(),
  deleteToken: jest.fn(),
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
jest.mock('@features/store', () => ({
  useAppStore: jest.fn(),
}));
jest.mock('@tanstack/react-query');

const __useGlobalContext = useGlobalContext as MockedFn<
  typeof useGlobalContext
>;
const __useRouter = useRouter as MockedFn<typeof useRouter>;
const __useQueryClient = useQueryClient as MockedFn<typeof useQueryClient>;

const __getToken = getToken as MockedFn<typeof getToken>;
const __deleteToken = deleteToken as MockedFn<typeof deleteToken>;

export {
  //
  __getToken,
  __useGlobalContext,
  __useRouter,
  __useQueryClient,
  __deleteToken,
};

type MockedFn<T extends (...params: any) => any> = jest.Mock &
  ((...args: Parameters<T>) => ReturnType<T>);
