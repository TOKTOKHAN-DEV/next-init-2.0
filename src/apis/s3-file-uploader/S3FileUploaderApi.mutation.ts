import { useMutation } from '@tanstack/react-query';

import { UseMutationParams } from '@/types/module/react-query/use-mutation-params';

import s3FileUploaderApi from './S3FileUploaderApi';

export const useUploadFileToS3Mutation = (
  params?: UseMutationParams<typeof s3FileUploaderApi.uploadFileToS3>,
) => {
  return useMutation(s3FileUploaderApi.uploadFileToS3, {
    ...params?.options,
  });
};

export const useUploadFilesToS3Mutation = (
  params?: UseMutationParams<typeof s3FileUploaderApi.uploadFilesToS3>,
) => {
  return useMutation(s3FileUploaderApi.uploadFilesToS3, {
    ...params?.options,
  });
};
