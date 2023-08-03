import { useMutation } from '@tanstack/react-query';

import { UseMutationParams } from '@/types/module/react-query/use-mutation-params';
import { Parameter } from '@/types/utility/parameter';
import { isNotNull } from '@/utils/validate/is-not-null';

import exampleApi from './ExampleApi';

export const EXAMPLE_API_MUTATION_KEY = {
  CREATE: (params?: Parameter<typeof exampleApi.create>) =>
    ['example-create', params].filter(isNotNull),
  UPDATE: (params?: Parameter<typeof exampleApi.update>) =>
    ['example-update', params].filter(isNotNull),
  DELETE: (id?: Parameter<typeof exampleApi.delete>) =>
    ['example-delete', id].filter(isNotNull),
};

export const useCreateExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.create>,
) => {
  return useMutation(exampleApi.create, {
    ...params?.options,
  });
};

export const useUpdateExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.update>,
) => {
  return useMutation(exampleApi.update, {
    ...params?.options,
  });
};

export const useDeleteExampleMutation = (
  params?: UseMutationParams<typeof exampleApi.delete>,
) => {
  return useMutation(exampleApi.delete, {
    ...params?.options,
  });
};
