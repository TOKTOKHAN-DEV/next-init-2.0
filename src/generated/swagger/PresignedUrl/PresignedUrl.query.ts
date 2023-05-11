import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MutationHookParams } from '../@types/react-query-type';
import { presignedUrlApi } from './PresignedUrl.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_PRESIGNED_URL_API = {
  CREATE: () =>
    ['PRESIGNED_URL_CREATE'].filter((key) => typeof key !== 'undefined'),
};

/**
 * @description 미리 서명된 URL 발급 --- ![file_upload_flow](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/file_upload_flow.jpeg) * 플로우 1, 2를 input onChange 핸들러에서 실행해야합니다. 1. 미시 서명된 URL 발급 2. 미리 서명된 URL로 파일 업로드 - Method: `PUT` - Url: `URL` (1에서 발급받은 미리 서명된 URL) - Headers: `Content-Type: file.type` (input의 file.type) - Body: `file`(input의 file)
 *
 * @tags presigned_url
 * @name PresignedUrlCreate
 * @request POST:/v1/presigned_url/
 * @secure
 */
export const usePresignedUrlCreateMutation = (
  params: MutationHookParams<
    typeof presignedUrlApi.presignedUrlCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_PRESIGNED_URL_API.CREATE();
  const result = useMutation(
    mutationKey,
    presignedUrlApi.presignedUrlCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};
