import instance from '@/configs/axios/instance';

import { HttpClient, RequestParams } from '../@http-client';
import { FAQListType } from '../@types/data-contracts';

export class FaqApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags faq
   * @name FaqList
   * @request GET:/v1/faq/
   * @secure
   */
  faqList = (variables?: {
    query?: {
      /** 타입 필터 */
      type?: string;
    };
    params?: RequestParams;
  }) =>
    this.request<FAQListType[], any>({
      path: `/v1/faq/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });
}

export const faqApi = new FaqApi({ instance });

//
