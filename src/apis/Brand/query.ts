import { useQuery } from 'react-query';

import Brand from '.';

import { QueryHookParams } from '@apis/type';

import { QUERY_KEY } from '@constants/query-keys';

export const useGetBrandDetailQuery = (params?: QueryHookParams<typeof Brand.getDetail>) => {
  return useQuery([QUERY_KEY.BRAND_DETAIL], () => Brand.getDetail(), params?.options);
};
