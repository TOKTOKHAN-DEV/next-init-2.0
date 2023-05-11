import instance from '@/configs/axios/instance';

import { HttpClient, RequestParams } from '../@http-client';
import { ReleaseHistoryLinkType } from '../@types/data-contracts';

export class ReleaseHistoryApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags release_history
   * @name ReleaseHistoryLinkRetrieve
   * @request GET:/v1/release_history/link/
   * @secure
   */
  releaseHistoryLinkRetrieve = (variables?: { params?: RequestParams }) =>
    this.request<ReleaseHistoryLinkType, any>({
      path: `/v1/release_history/link/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables?.params,
    });
}

export const releaseHistoryApi = new ReleaseHistoryApi({ instance });

//
