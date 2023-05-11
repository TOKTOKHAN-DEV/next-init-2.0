import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  MutationHookParams,
  Parameter,
  QueryHookParams,
} from '../@types/react-query-type';
import { userApi } from './User.api';

/**
 * QUERY_KEYS
 */
export const QUERY_KEY_USER_API = {
  REFRESH_CREATE: () =>
    ['USER_REFRESH_CREATE'].filter((key) => typeof key !== 'undefined'),
  SOCIAL_LOGIN_CREATE: () =>
    ['USER_SOCIAL_LOGIN_CREATE'].filter((key) => typeof key !== 'undefined'),
  REGISTER_CREATE: () =>
    ['USER_REGISTER_CREATE'].filter((key) => typeof key !== 'undefined'),
  ME_RETRIEVE: (variables?: Parameter<typeof userApi.userMeRetrieve>) =>
    ['USER_ME_RETRIEVE', variables].filter((key) => typeof key !== 'undefined'),
  ME_PARTIAL_UPDATE: () =>
    ['USER_ME_PARTIAL_UPDATE'].filter((key) => typeof key !== 'undefined'),
  WITHDRAWAL_DESTROY: () =>
    ['USER_WITHDRAWAL_DESTROY'].filter((key) => typeof key !== 'undefined'),
};

/**
 * @description 유저 토큰리프레시 --- refresh토큰으로 새로운 access토큰과 refresh토큰을 요청합니다.
 *
 * @tags user
 * @name UserRefreshCreate
 * @request POST:/v1/user/refresh/
 * @secure
 */
export const useUserRefreshCreateMutation = (
  params: MutationHookParams<typeof userApi.userRefreshCreate, AxiosError<any>>,
) => {
  const mutationKey = QUERY_KEY_USER_API.REFRESH_CREATE();
  const result = useMutation(
    mutationKey,
    userApi.userRefreshCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description 유저 소셜 로그인(인가코드 검증) --- ![social_login_flow](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/social_login_flow.jpeg) 1. 소셜 로그인(인가코드 발급) - Method: `GET` - Url: 각 소셜 로그인 문서 참고 - Parameter: - `client_id`: 앱 ID - `redirect_uri`: 인가 코드를 전달받을 프런트 URI(redirect_uri는 소셜 앱 설정에 등록해둬야 합니다.) - `response_type`: `code`로 고정 - `state`: `kakao` | `naver` | `google` | `apple` | `facebook` - Description: - 소셜 로그인을 진행할 페이지를 띄워야 하기 때문에 route를 이동해줘야 합니다. - `redirect_uri`는 소셜 로그인 후 돌아올 프런트 URI이며 쿼리와 함께 리턴 받습니다. - 소셜 로그인 후 해당 페이지에서 쿼리의 code와 state를 읽어 저장해둔다. 2. 소셜 로그인(인가코드 검증) 3. 소셜 회원가입 - `isRegister: true`인 경우 `access`, `refresh`를 저장 후 로그인 처리를 합니다. - `isRegister: false`인 경우 `socialToken`을 사용해 회원가입을 진행합니다.
 *
 * @tags user
 * @name UserSocialLoginCreate
 * @request POST:/v1/user/social_login/
 * @secure
 */
export const useUserSocialLoginCreateMutation = (
  params: MutationHookParams<
    typeof userApi.userSocialLoginCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_USER_API.SOCIAL_LOGIN_CREATE();
  const result = useMutation(
    mutationKey,
    userApi.userSocialLoginCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description 유저 회원가입 --- - 소셜 유저인 경우 `socialToken`을 전달해야합니다.
 *
 * @tags user
 * @name UserRegisterCreate
 * @request POST:/v1/user/register/
 * @secure
 */
export const useUserRegisterCreateMutation = (
  params: MutationHookParams<
    typeof userApi.userRegisterCreate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_USER_API.REGISTER_CREATE();
  const result = useMutation(
    mutationKey,
    userApi.userRegisterCreate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * @description 유저 정보 ---
 *
 * @tags user
 * @name UserMeRetrieve
 * @request GET:/v1/user/me/
 * @secure
 */
export const useUserMeRetrieveQuery = (
  params?: QueryHookParams<typeof userApi.userMeRetrieve, AxiosError<any>>,
) => {
  const queryKey = QUERY_KEY_USER_API.ME_RETRIEVE(params?.variables);
  const result = useQuery(
    queryKey,
    () => userApi.userMeRetrieve(params?.variables),
    params?.options,
  );

  return { ...result, queryKey };
};

/**
 * @description 유저 정보 ---
 *
 * @tags user
 * @name UserMePartialUpdate
 * @request PATCH:/v1/user/me/
 * @secure
 */
export const useUserMePartialUpdateMutation = (
  params: MutationHookParams<
    typeof userApi.userMePartialUpdate,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_USER_API.ME_PARTIAL_UPDATE();
  const result = useMutation(
    mutationKey,
    userApi.userMePartialUpdate,
    params?.options,
  );

  return { ...result, mutationKey };
};

/**
 * No description
 *
 * @tags user
 * @name UserWithdrawalDestroy
 * @request DELETE:/v1/user/withdrawal/
 * @secure
 */
export const useUserWithdrawalDestroyMutation = (
  params?: MutationHookParams<
    typeof userApi.userWithdrawalDestroy,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_USER_API.WITHDRAWAL_DESTROY();
  const result = useMutation(
    mutationKey,
    userApi.userWithdrawalDestroy,
    params?.options,
  );

  return { ...result, mutationKey };
};
