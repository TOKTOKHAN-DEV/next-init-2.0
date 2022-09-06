import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';
import { RequestFnReturn } from '@apis/type';

import { bytesToMB, isOverSize, mbToBytes } from '@utils/file';

export class S3FileUploaderApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  private _createPresignedUrl = async (
    name: string,
  ): Promise<{ url: string }> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/presigned_url/`,
      data: { name },
    });
    return data;
  };

  private _uploadFileToS3 = async (params: { url: string; file: File }) => {
    const { url, file } = params;
    await this.axios({
      method: 'PUT',
      url,
      data: file,
      headers: { 'Content-Type': file.type },
    });
  };

  private _createOverSizeError = (file: File, maxSize: number) => {
    return {
      name: file.name,
      size: file.size,
      maxSize: mbToBytes(maxSize),
      message: `${file.name}의 용량 ${bytesToMB(file.size).toFixed(
        1,
      )}(MB)는 최대용량 ${maxSize}(MB)를 초과했습니다.`,
    };
  };

  uploadFileToS3 = async (params: {
    file: File;
    options?: {
      /** defalut: Infinity */
      maxSize?: number; // mb
    };
  }): Promise<{ url: string; file: File }> => {
    const { file, options } = params;
    const { maxSize = Infinity } = options || {};
    if (isOverSize(file, { maxSize })) {
      throw this._createOverSizeError(file, maxSize);
    }

    const { url } = await this._createPresignedUrl(file.name);
    await this._uploadFileToS3({ url, file });
    const { origin, pathname } = new URL(url);

    return { file, url: origin + pathname };
  };

  uploadFilesToS3 = async (params: {
    files: File[];
    options?: {
      maxSize?: number; // mb
    };
  }) => {
    const { files, options } = params;
    const sattled = await Promise.allSettled(
      files.map((file) => this.uploadFileToS3({ file, options })),
    );

    const fulfilled = sattled.filter(
      (v) => v.status === 'fulfilled',
    ) as PromiseFulfilledResult<RequestFnReturn<typeof this.uploadFileToS3>>[];

    const rejected = sattled.filter(
      (v) => v.status === 'rejected',
    ) as PromiseRejectedResult[];

    return {
      fulfilled,
      rejected,
    };
  };
}

const s3FileUploaderApi = new S3FileUploaderApi();

export default s3FileUploaderApi;
