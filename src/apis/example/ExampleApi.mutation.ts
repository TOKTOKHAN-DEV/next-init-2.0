import { UseMutationParams } from '@/types/module/react-query/use-mutaton-params';
import { useMutation } from '@tanstack/react-query';

import exampleApi from './ExampleApi';
import { CreateExampleDto } from './types/dto/create-example-dto';
import { UpdateExampleDto } from './types/dto/update-example-dto';

export const EXAMPLE_API_MUTATION_KEY = {
  CREATE: (dto?: CreateExampleDto) => ['example-create', dto],
  UPDATE: (dto?: UpdateExampleDto) => ['example-update', dto],
  DELETE: (id?: string) => ['example-delete', id],
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
