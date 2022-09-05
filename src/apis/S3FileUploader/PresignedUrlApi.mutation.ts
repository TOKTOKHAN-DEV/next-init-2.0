import { useMutation } from 'react-query';

import { MutationHookParams } from '@apis/type';

import presignedUrlApi from './S3FileUploaderApi';

export const useCreatePresignedUrlMutation = (
  params?: MutationHookParams<typeof presignedUrlApi.createPresignedUrl>,
) => {
  return useMutation(presignedUrlApi.createPresignedUrl, {
    ...params?.options,
  });
};
