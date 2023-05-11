import instance from '@/configs/axios/instance';

import { HttpClient, RequestParams } from '../@http-client';
import { PaginatedSolutionListListType } from '../@types/data-contracts';

export class SolutionApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags solution
   * @name SolutionList
   * @request GET:/v1/solution/
   * @secure
   */
  solutionList = (variables?: {
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedSolutionListListType, any>({
      path: `/v1/solution/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });
}

export const solutionApi = new SolutionApi({ instance });

//
