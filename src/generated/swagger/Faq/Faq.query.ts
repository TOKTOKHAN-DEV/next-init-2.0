import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { delay } from '@/utils/test/delay';

import { Parameter, QueryHookParams } from '../@types/react-query-type';
import { faqApi } from './Faq.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_FAQ_API = {
  LIST: (variables?: Parameter<typeof faqApi.faqList>) =>
    ['FAQ_LIST', variables].filter((key) => typeof key !== 'undefined'),
};

/**
 * No description
 *
 * @tags faq
 * @name FaqList
 * @request GET:/v1/faq/
 * @secure
 */
export const useFaqListQuery = (
  params?: QueryHookParams<typeof faqApi.faqList, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_FAQ_API.LIST(params?.variables);
  const result = useQuery(
    queryKey,
    async () => {
      await delay([], true, 5000);
      return faqApi.faqList(params?.variables);
    },
    params?.options,
  );

  return { ...result, queryKey };
};
