import Auth from '.';
import { useMutation } from 'react-query';

import { MutationHookParams } from 'apis/type';

export const useEmailLoginMutation = (params?: MutationHookParams<typeof Auth.emailLogin>) => {
  return useMutation(Auth.emailLogin, {
    ...params?.options,
  });
};

export const useEmailCheckMutation = (params?: MutationHookParams<typeof Auth.emailCheck>) => {
  return useMutation(Auth.emailCheck, {
    ...params?.options,
  });
};
