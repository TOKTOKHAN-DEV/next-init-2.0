import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  MutationHookParams,
  Parameter,
  QueryHookParams,
} from '../@types/react-query-type';
import { projectApi } from './Project.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_PROJECT_API = {
  SERVICE_LIST: (variables?: Parameter<typeof projectApi.projectServiceList>) =>
    ['PROJECT_SERVICE_LIST', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
  CREATE: () => ['PROJECT_CREATE'].filter((key) => typeof key !== 'undefined'),
  COUNT_RETRIEVE: (
    variables?: Parameter<typeof projectApi.projectCountRetrieve>,
  ) =>
    ['PROJECT_COUNT_RETRIEVE', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
  ME_LIST: (variables?: Parameter<typeof projectApi.projectMeList>) =>
    ['PROJECT_ME_LIST', variables].filter((key) => typeof key !== 'undefined'),
  RETRIEVE: (variables?: Parameter<typeof projectApi.projectRetrieve>) =>
    ['PROJECT_RETRIEVE', variables].filter((key) => typeof key !== 'undefined'),
  UPDATE: () => ['PROJECT_UPDATE'].filter((key) => typeof key !== 'undefined'),
  PARTIAL_UPDATE: () =>
    ['PROJECT_PARTIAL_UPDATE'].filter((key) => typeof key !== 'undefined'),
  DESTROY: () =>
    ['PROJECT_DESTROY'].filter((key) => typeof key !== 'undefined'),
  REQUEST_CREATE: () =>
    ['PROJECT_REQUEST_CREATE'].filter((key) => typeof key !== 'undefined'),
  ESTIMATE_SHEET_RETRIEVE: (
    variables?: Parameter<typeof projectApi.projectEstimateSheetRetrieve>,
  ) =>
    ['PROJECT_ESTIMATE_SHEET_RETRIEVE', variables].filter(
      (key) => typeof key !== 'undefined',
    ),
};

/**
 * No description
 *
 * @tags project
 * @name ProjectServiceList
 * @request GET:/v1/project/service/
 * @secure
 */
export const useProjectServiceListQuery = (
  params?: QueryHookParams<
    typeof projectApi.projectServiceList,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_PROJECT_API.SERVICE_LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => projectApi.projectServiceList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * No description
 *
 * @tags project
 * @name ProjectCreate
 * @request POST:/v1/project/
 * @secure
 */
export const useProjectCreateMutation = (
  params: MutationHookParams<typeof projectApi.projectCreate, AxiosError<any>>,
) => {
  const mutationKey = QUERY_KEY_PROJECT_API.CREATE();
  const result = useMutation(
    mutationKey,
    projectApi.projectCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * No description
 *
 * @tags project
 * @name ProjectCountRetrieve
 * @request GET:/v1/project/count/
 * @secure
 */
export const useProjectCountRetrieveQuery = (
  params?: QueryHookParams<
    typeof projectApi.projectCountRetrieve,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_PROJECT_API.COUNT_RETRIEVE(params?.variables);
  const result = useQuery(
    queryKey,
    () => projectApi.projectCountRetrieve(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * No description
 *
 * @tags project
 * @name ProjectMeList
 * @request GET:/v1/project/me/
 * @secure
 */
export const useProjectMeListQuery = (
  params?: QueryHookParams<typeof projectApi.projectMeList, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_PROJECT_API.ME_LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => projectApi.projectMeList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
 *
 * @tags project
 * @name ProjectRetrieve
 * @request GET:/v1/project/{id}/
 * @secure
 */
export const useProjectRetrieveQuery = (
  params: QueryHookParams<typeof projectApi.projectRetrieve, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_PROJECT_API.RETRIEVE(params.variables);
  const result = useQuery(
    queryKey,
    () => projectApi.projectRetrieve(params.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
 *
 * @tags project
 * @name ProjectUpdate
 * @request PUT:/v1/project/{id}/
 * @secure
 */
export const useProjectUpdateMutation = (
  params: MutationHookParams<typeof projectApi.projectUpdate, AxiosError<any>>,
) => {
  const mutationKey = QUERY_KEY_PROJECT_API.UPDATE();
  const result = useMutation(
    mutationKey,
    projectApi.projectUpdate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
 *
 * @tags project
 * @name ProjectPartialUpdate
 * @request PATCH:/v1/project/{id}/
 * @secure
 */
export const useProjectPartialUpdateMutation = (
  params: MutationHookParams<
    typeof projectApi.projectPartialUpdate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_PROJECT_API.PARTIAL_UPDATE();
  const result = useMutation(
    mutationKey,
    projectApi.projectPartialUpdate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description 프로젝트 업데이트 API --- task_set의 경우 선택된 모든 데이터를 한번에 보내줘야합니다.
 *
 * @tags project
 * @name ProjectDestroy
 * @request DELETE:/v1/project/{id}/
 * @secure
 */
export const useProjectDestroyMutation = (
  params: MutationHookParams<typeof projectApi.projectDestroy, AxiosError<any>>,
) => {
  const mutationKey = QUERY_KEY_PROJECT_API.DESTROY();
  const result = useMutation(
    mutationKey,
    projectApi.projectDestroy,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description # kind R : "의뢰 신청 C : "컨설팅 신청
 *
 * @tags project
 * @name ProjectRequestCreate
 * @request POST:/v1/project/{project_id}/request/
 * @secure
 */
export const useProjectRequestCreateMutation = (
  params: MutationHookParams<
    typeof projectApi.projectRequestCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_PROJECT_API.REQUEST_CREATE();
  const result = useMutation(
    mutationKey,
    projectApi.projectRequestCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * No description
 *
 * @tags project
 * @name ProjectEstimateSheetRetrieve
 * @request GET:/v1/project/{id}/estimate_sheet/
 * @secure
 */
export const useProjectEstimateSheetRetrieveQuery = (
  params: QueryHookParams<
    typeof projectApi.projectEstimateSheetRetrieve,
    AxiosError<any>
  >,
) => {
  const queryKey = QUERY_KEY_PROJECT_API.ESTIMATE_SHEET_RETRIEVE(
    params.variables,
  );
  const result = useQuery(
    queryKey,
    () => projectApi.projectEstimateSheetRetrieve(params.variables),
    params?.options,
  );

  return { ...result, queryKey };
};
