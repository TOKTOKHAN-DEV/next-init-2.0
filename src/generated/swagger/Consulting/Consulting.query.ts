import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MutationHookParams } from '../@types/react-query-type';
import { consultingApi } from './Consulting.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_CONSULTING_API = {
  CREATE: () =>
    ['CONSULTING_CREATE'].filter((key) => typeof key !== 'undefined'),
};

/**
 * No description
 *
 * @tags consulting
 * @name ConsultingCreate
 * @request POST:/v1/consulting/
 * @secure
 */
export const useConsultingCreateMutation = (
  params: MutationHookParams<
    typeof consultingApi.consultingCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_CONSULTING_API.CREATE();
  const result = useMutation(
    mutationKey,
    consultingApi.consultingCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};
