import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  MutationHookParams,
  Parameter,
  QueryHookParams,
} from '../@types/react-query-type';
import { estimateApi } from './Estimate.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_ESTIMATE_API = {
  FORMULA_RETRIEVE: (
    variables?: Parameter<typeof estimateApi.estimateFormulaRetrieve>,
  ) =>
    ['ESTIMATE_FORMULA_RETRIEVE', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
  PAY_CREATE: () =>
    ['ESTIMATE_PAY_CREATE'].filter((key) => typeof key !== 'undefined'),
};

/**
 * No description
 *
 * @tags estimate
 * @name EstimateFormulaRetrieve
 * @request GET:/v1/estimate/formula/
 * @secure
 */
export const useEstimateFormulaRetrieveQuery = (
  params?: QueryHookParams<
    typeof estimateApi.estimateFormulaRetrieve,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_ESTIMATE_API.FORMULA_RETRIEVE(params?.variables);
  const result = useQuery(
    queryKey,
    () => estimateApi.estimateFormulaRetrieve(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * No description
 *
 * @tags estimate
 * @name EstimatePayCreate
 * @request POST:/v1/estimate/pay/
 * @secure
 */
export const useEstimatePayCreateMutation = (
  params: MutationHookParams<
    typeof estimateApi.estimatePayCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_ESTIMATE_API.PAY_CREATE();
  const result = useMutation(
    mutationKey,
    estimateApi.estimatePayCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};
