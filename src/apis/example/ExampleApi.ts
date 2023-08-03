import { AxiosInstance } from 'axios';

import instance from '@/configs/axios/instance';
import { Paginated } from '@/types/utility/paginated';
import { WithPaginationParams } from '@/types/utility/with-pagination-params';

import { CreateExampleDto } from './types/dto/create-example-dto';
import { GetExampleDto } from './types/dto/get-example-dto';
import { UpdateExampleDto } from './types/dto/update-example-dto';
import { ExampleModel } from './types/model/example';

export class ExampleApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getList = async (params?: GetExampleDto): Promise<ExampleModel[]> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example`,
      params,
    });
    return data;
  };

  getListPaginated = async (
    req?: WithPaginationParams<GetExampleDto>,
  ): Promise<Paginated<ExampleModel[]>> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example`,
      params: req,
    });
    return data;
  };

  getById = async (id: string): Promise<ExampleModel> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/example/${id}`,
    });
    return data;
  };

  create = async (req: CreateExampleDto): Promise<ExampleModel> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/example`,
      data: req,
    });
    return data;
  };

  update = async (req: UpdateExampleDto): Promise<ExampleModel> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/example/${req.id}`,
      data: req,
    });
    return data;
  };

  delete = async (id: string): Promise<void> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/example/${id}`,
    });
    return data;
  };
}

const exampleApi = new ExampleApi();

export default exampleApi;
