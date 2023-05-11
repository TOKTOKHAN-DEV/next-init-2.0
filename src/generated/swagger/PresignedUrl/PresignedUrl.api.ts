import instance from '@/configs/axios/instance';

import { ContentType, HttpClient, RequestParams } from '../@http-client';
import { PresignedUrlType } from '../@types/data-contracts';
import { DeepOmitReadOnly } from '../@types/util-types';

export class PresignedUrlApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 미리 서명된 URL 발급 --- ![file_upload_flow](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/file_upload_flow.jpeg) * 플로우 1, 2를 input onChange 핸들러에서 실행해야합니다. 1. 미시 서명된 URL 발급 2. 미리 서명된 URL로 파일 업로드 - Method: `PUT` - Url: `URL` (1에서 발급받은 미리 서명된 URL) - Headers: `Content-Type: file.type` (input의 file.type) - Body: `file`(input의 file)
   *
   * @tags presigned_url
   * @name PresignedUrlCreate
   * @request POST:/v1/presigned_url/
   * @secure
   */
  presignedUrlCreate = (variables: {
    data: DeepOmitReadOnly<PresignedUrlType>;
    params?: RequestParams;
  }) =>
    this.request<PresignedUrlType, any>({
      path: `/v1/presigned_url/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });
}

export const presignedUrlApi = new PresignedUrlApi({ instance });

//
