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

  async getExampleList(params: ExampleParamGetType): Promise<ExampleDTOType[]> {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/posts`,
      params,
    });
    return data;
  }

  async getExampleById(id: string): Promise<ExampleDTOType> {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example/${id}`,
    });
    return data;
  }

  async postExample(body: ExampleDTOType): Promise<ExampleDTOType> {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/example`,
      data: body,
    });
    return data;
  }

  async putExample(req: ExampleParamPutType): Promise<ExampleDTOType> {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/example/${req.id}`,
      data: req.data,
    });
    return data;
  }
  async patchExample(req: ExampleParamPatchType): Promise<ExampleDTOType> {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/example/${req.id}`,
      data: req.data,
    });
    return data;
  }

  async deleteExample(id: string): Promise<boolean> {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/example/${id}`,
    });
    return data;
  }
}

const exampleApi = new ExampleApi();

export default exampleApi;
