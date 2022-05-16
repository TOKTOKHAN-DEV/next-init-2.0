import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ExampleDTOType,
  ExampleParamGetType,
  ExampleParamPatchType,
  ExampleParamPutType,
} from './ExampleApi.type';

export class ExampleApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getExampleList = async (
    params?: ExampleParamGetType,
  ): Promise<ExampleDTOType[]> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example`,
      params,
    });
    return data;
  };

  getExampleById = async (id: string): Promise<ExampleDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example/${id}`,
    });
    return data;
  };

  postExample = async (body: ExampleDTOType): Promise<ExampleDTOType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/example`,
      data: body,
    });
    return data;
  };

  putExample = async (req: ExampleParamPutType): Promise<ExampleDTOType> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/example/${req.id}`,
      data: req.data,
    });
    return data;
  };
  patchExample = async (
    req: ExampleParamPatchType,
  ): Promise<ExampleDTOType> => {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/example/${req.id}`,
      data: req.data,
    });
    return data;
  };

  deleteExample = async (id: string): Promise<boolean> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/example/${id}`,
    });
    return data;
  };
}

const exampleApi = new ExampleApi();

export default exampleApi;
