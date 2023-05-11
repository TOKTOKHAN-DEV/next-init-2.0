import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Parameter, QueryHookParams } from '../@types/react-query-type';
import { taskApi } from './Task.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_TASK_API = {
  LIST: (variables?: Parameter<typeof taskApi.taskList>) =>
    ['TASK_LIST', variables].filter((key) => typeof key !== 'undefined'),
  KIND_LIST: (variables?: Parameter<typeof taskApi.taskKindList>) =>
    ['TASK_KIND_LIST', variables].filter((key) => typeof key !== 'undefined'),
};

/**
 * No description
 *
 * @tags task
 * @name TaskList
 * @request GET:/v1/task/
 * @secure
 */
export const useTaskListQuery = (
  params?: QueryHookParams<typeof taskApi.taskList, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_TASK_API.LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => taskApi.taskList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * @description 기능 주제 구성에 타입별 TASK 리스트 --- ![task_api](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/task_api.png) 위 이미지 처럼 유저라는 depth는 존재하지 않기 떄문에 kind로 별도 필드 구성했습니다.
 *
 * @tags task
 * @name TaskKindList
 * @request GET:/v1/task/kind/
 * @secure
 */
export const useTaskKindListQuery = (
  params?: QueryHookParams<typeof taskApi.taskKindList, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_TASK_API.KIND_LIST(params?.variables);
  const result = useQuery(
    queryKey,
    () => taskApi.taskKindList(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};
