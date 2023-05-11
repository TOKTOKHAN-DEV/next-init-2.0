import instance from '@/configs/axios/instance';

import { HttpClient, RequestParams } from '../@http-client';
import { PaginatedOutsourcingListListType } from '../@types/data-contracts';

export class OutsourcingApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags outsourcing
   * @name OutsourcingList
   * @request GET:/v1/outsourcing/
   * @secure
   */
  outsourcingList = (variables?: {
    query?: {
      /** The pagination cursor value. */
      cursor?: string;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedOutsourcingListListType, any>({
      path: `/v1/outsourcing/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });
}

export const outsourcingApi = new OutsourcingApi({ instance });

//
