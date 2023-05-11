import instance from '@/configs/axios/instance';

import { ContentType, HttpClient, RequestParams } from '../@http-client';
import {
  PaginatedProjectMeListType,
  PaginatedServiceListType,
  PatchedProjectDetailUpdateType,
  ProjectCountType,
  ProjectDetailUpdateType,
  ProjectEstimateSheetType,
  ProjectListCreateType,
  ProjectRequestCreateType,
} from '../@types/data-contracts';
import { DeepOmitReadOnly } from '../@types/util-types';

export class ProjectApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags project
   * @name ProjectServiceList
   * @request GET:/v1/project/service/
   * @secure
   */
  projectServiceList = (variables?: {
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedServiceListType, any>({
      path: `/v1/project/service/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * No description
   *
   * @tags project
   * @name ProjectCreate
   * @request POST:/v1/project/
   * @secure
   */
  projectCreate = (variables: {
    data: DeepOmitReadOnly<ProjectListCreateType>;
    params?: RequestParams;
  }) =>
    this.request<ProjectListCreateType, any>({
      path: `/v1/project/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * No description
   *
   * @tags project
   * @name ProjectCountRetrieve
   * @request GET:/v1/project/count/
   * @secure
   */
  projectCountRetrieve = (variables?: { params?: RequestParams }) =>
    this.request<ProjectCountType, any>({
      path: `/v1/project/count/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * No description
   *
   * @tags project
   * @name ProjectMeList
   * @request GET:/v1/project/me/
   * @secure
   */
  projectMeList = (variables?: {
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** The initial index from which to return the results. */
      offset?: number;
    };
    params?: RequestParams;
  }) =>
    this.request<PaginatedProjectMeListType, any>({
      path: `/v1/project/me/`,
      method: 'GET',
      query: variables?.query,
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
   *
   * @tags project
   * @name ProjectRetrieve
   * @request GET:/v1/project/{id}/
   * @secure
   */
  projectRetrieve = (variables: { id: string; params?: RequestParams }) =>
    this.request<ProjectDetailUpdateType, any>({
      path: `/v1/project/${variables.id}/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
   *
   * @tags project
   * @name ProjectUpdate
   * @request PUT:/v1/project/{id}/
   * @secure
   */
  projectUpdate = (variables: {
    id: string;
    data: DeepOmitReadOnly<ProjectDetailUpdateType>;
    params?: RequestParams;
  }) =>
    this.request<ProjectDetailUpdateType, any>({
      path: `/v1/project/${variables.id}/`,
      method: 'PUT',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
   *
   * @tags project
   * @name ProjectPartialUpdate
   * @request PATCH:/v1/project/{id}/
   * @secure
   */
  projectPartialUpdate = (variables: {
    id: string;
    data: DeepOmitReadOnly<PatchedProjectDetailUpdateType>;
    params?: RequestParams;
  }) =>
    this.request<ProjectDetailUpdateType, any>({
      path: `/v1/project/${variables.id}/`,
      method: 'PATCH',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
   *
   * @tags project
   * @name ProjectDestroy
   * @request DELETE:/v1/project/{id}/
   * @secure
   */
  projectDestroy = (variables: { id: string; params?: RequestParams }) =>
    this.request<void, any>({
      path: `/v1/project/${variables.id}/`,
      method: 'DELETE',
      secure: true,
      ...variables.params,
    });

  /**
   * @description # kind R : "의뢰 신청 C : "컨설팅 신청
   *
   * @tags project
   * @name ProjectRequestCreate
   * @request POST:/v1/project/{project_id}/request/
   * @secure
   */
  projectRequestCreate = (variables: {
    projectId: string;
    data: DeepOmitReadOnly<ProjectRequestCreateType>;
    params?: RequestParams;
  }) =>
    this.request<ProjectRequestCreateType, any>({
      path: `/v1/project/${variables.projectId}/request/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * No description
   *
   * @tags project
   * @name ProjectEstimateSheetRetrieve
   * @request GET:/v1/project/{id}/estimate_sheet/
   * @secure
   */
  projectEstimateSheetRetrieve = (variables: {
    id: string;
    params?: RequestParams;
  }) =>
    this.request<ProjectEstimateSheetType, any>({
      path: `/v1/project/${variables.id}/estimate_sheet/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables.params,
    });
}

export const projectApi = new ProjectApi({ instance });

//
