import instance from '@/configs/axios/instance';

import { ContentType, HttpClient, RequestParams } from '../@http-client';
import {
  EstimateFormulaType,
  EstimateStandardAmountType,
} from '../@types/data-contracts';
import { DeepOmitReadOnly } from '../@types/util-types';

export class EstimateApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags estimate
   * @name EstimateFormulaRetrieve
   * @request GET:/v1/estimate/formula/
   * @secure
   */
  estimateFormulaRetrieve = (variables?: { params?: RequestParams }) =>
    this.request<EstimateFormulaType, any>({
      path: `/v1/estimate/formula/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * No description
   *
   * @tags estimate
   * @name EstimatePayCreate
   * @request POST:/v1/estimate/pay/
   * @secure
   */
  estimatePayCreate = (variables: {
    data: DeepOmitReadOnly<EstimateStandardAmountType>;
    params?: RequestParams;
  }) =>
    this.request<EstimateStandardAmountType, any>({
      path: `/v1/estimate/pay/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });
}

export const estimateApi = new EstimateApi({ instance });

//
