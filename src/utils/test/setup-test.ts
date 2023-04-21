import { useRouter } from 'next/router';

import { useQueryClient } from '@tanstack/react-query';

import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

import { MockedFn } from '@/types/utility/mocked-fn';

jest.mock('@/utils/localStorage/token', () => ({
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

export {
  //
  __useGlobalContext,
  __useRouter,
  __useQueryClient,
};
