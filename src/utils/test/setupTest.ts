import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { useAppStore } from '@features/store';

import { useQueryClient } from '@tanstack/react-query';
import { deleteToken, getToken } from '@utils/localStorage/token';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
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
jest.mock('react-redux');
jest.mock('@tanstack/react-query');

const __useDispatch = useDispatch as MockedFn<typeof useDispatch>;
const __useAppStore = useAppStore as MockedFn<typeof useAppStore>;
const __useRouter = useRouter as MockedFn<typeof useRouter>;
const __useQueryClient = useQueryClient as MockedFn<typeof useQueryClient>;

const __getToken = getToken as MockedFn<typeof getToken>;
const __deleteToken = deleteToken as MockedFn<typeof deleteToken>;

const __dispatch = jest.fn();
__useDispatch.mockReturnValue(__dispatch);

export {
  //
  __useDispatch,
  __getToken,
  __dispatch,
  __useAppStore,
  __useRouter,
  __useQueryClient,
  __deleteToken,
};

type MockedFn<T extends (...params: any) => any> = jest.Mock &
  ((...args: Parameters<T>) => ReturnType<T>);
