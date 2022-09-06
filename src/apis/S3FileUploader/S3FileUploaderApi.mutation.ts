import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import s3FileUploaderApi from './S3FileUploaderApi';

export const useUploadFileToS3Mutation = (
  params?: MutationHookParams<typeof s3FileUploaderApi.uploadFileToS3>,
) => {
  return useMutation(s3FileUploaderApi.uploadFileToS3, {
    ...params?.options,
  });
};

export const useUploadFilesToS3Mutation = (
  params?: MutationHookParams<typeof s3FileUploaderApi.uploadFilesToS3>,
) => {
  return useMutation(s3FileUploaderApi.uploadFilesToS3, {
    ...params?.options,
  });
};
