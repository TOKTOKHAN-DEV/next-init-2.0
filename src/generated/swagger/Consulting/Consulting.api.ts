import instance from '@/configs/axios/instance';

import { ContentType, HttpClient, RequestParams } from '../@http-client';
import { ConsultingCreateType } from '../@types/data-contracts';
import { DeepOmitReadOnly } from '../@types/util-types';

export class ConsultingApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags consulting
   * @name ConsultingCreate
   * @request POST:/v1/consulting/
   * @secure
   */
  consultingCreate = (variables: {
    data: DeepOmitReadOnly<ConsultingCreateType>;
    params?: RequestParams;
  }) =>
    this.request<ConsultingCreateType, any>({
      path: `/v1/consulting/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });
}

export const consultingApi = new ConsultingApi({ instance });

//
