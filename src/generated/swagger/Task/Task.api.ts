import instance from '@/configs/axios/instance';

import { HttpClient, RequestParams } from '../@http-client';
import {
  PaginatedKindListListType,
  PaginatedTaskListListType,
} from '../@types/data-contracts';

export class TaskApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags task
   * @name TaskList
   * @request GET:/v1/task/
   * @secure
   */
  taskList = (variables?: {
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
      parents?: string;
      service_id?: string;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedTaskListListType, any>({
      path: `/v1/task/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * @description 기능 주제 구성에 타입별 TASK 리스트 --- ![task_api](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/task_api.png) 위 이미지 처럼 유저라는 depth는 존재하지 않기 떄문에 kind로 별도 필드 구성했습니다.
   *
   * @tags task
   * @name TaskKindList
   * @request GET:/v1/task/kind/
   * @secure
   */
  taskKindList = (variables?: {
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedKindListListType, any>({
      path: `/v1/task/kind/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });
}

export const taskApi = new TaskApi({ instance });

//
