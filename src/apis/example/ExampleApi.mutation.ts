import { UseMutationParams } from '@/types/module/react-query/use-mutaton-params';
import { useMutation } from '@tanstack/react-query';

import exampleApi from './ExampleApi';
import {
  ExampleDTOType,
  ExampleParamPatchType,
  ExampleParamPutType,
} from './ExampleApi.type';

export const EXAMPLE_API_MUTATION_KEY = {
  POST: (param?: ExampleDTOType) => ['example-post', param],
  PUT: (req?: ExampleParamPutType) => ['example-put', req],
  PATCH: (req?: ExampleParamPatchType) => ['example-patch', req],
  DELETE: (id?: string) => ['example-delete', id],
};

export const usePostExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.postExample>,
) => {
  return useMutation(exampleApi.postExample, {
    ...params?.options,
  });
};

export const usePutExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.putExample>,
) => {
  return useMutation(exampleApi.putExample, {
    ...params?.options,
  });
};
export const usePatchExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.patchExample>,
) => {
  return useMutation(exampleApi.patchExample, {
    ...params?.options,
  });
};
export const useDeleteExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.deleteExample>,
) => {
  return useMutation(exampleApi.deleteExample, {
    ...params?.options,
  });
};
