import { useQuery } from 'react-query';

import Brand from '.';

import { QueryHookParams } from 'src/apis/type';

import { QUERY_KEY } from 'src/constants/query-keys';

export const useGetBrandDetailQuery = (params?: QueryHookParams<typeof Brand.getDetail>) => {
  return useQuery([QUERY_KEY.BRAND_DETAIL], () => Brand.getDetail(), params?.options);
};
