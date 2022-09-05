import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

export class S3FileUploaderApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  createPresignedUrl = async (name: string): Promise<{ url: string }> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/presigned_url/`,
      data: { name },
    });
    return data;
  };

  uploadFileToS3 = async (file: File): Promise<{ url: string }> => {
    const { url } = await this.createPresignedUrl(file.name);
    const { data } = await this.axios({
      method: 'PUT',
      url: url,
      data: { file },
      headers: { 'Content-Type': file.type },
    });
    return data;
  };

  uploadFilesToS3 = async (files: File[]) => {
    return Promise.all(files.map(this.uploadFileToS3));
  };
}

const s3FileUploaderApi = new S3FileUploaderApi();

export default s3FileUploaderApi;
