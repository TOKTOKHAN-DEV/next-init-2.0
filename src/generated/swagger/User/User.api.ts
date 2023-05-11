import instance from '@/configs/axios/instance';

import { ContentType, HttpClient, RequestParams } from '../@http-client';
import {
  PatchedUserMeType,
  TokenRefreshType,
  UserMeType,
  UserRegisterType,
  UserSocialLoginType,
} from '../@types/data-contracts';
import { DeepOmitReadOnly } from '../@types/util-types';

export class UserApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 유저 토큰리프레시 --- refresh토큰으로 새로운 access토큰과 refresh토큰을 요청합니다.
   *
   * @tags user
   * @name UserRefreshCreate
   * @request POST:/v1/user/refresh/
   * @secure
   */
  userRefreshCreate = (variables: {
    data: DeepOmitReadOnly<TokenRefreshType>;
    params?: RequestParams;
  }) =>
    this.request<TokenRefreshType, any>({
      path: `/v1/user/refresh/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 유저 소셜 로그인(인가코드 검증) --- ![social_login_flow](https://postoo-prod-bucket.s3.ap-northeast-2.amazonaws.com/static/docs/social_login_flow.jpeg) 1. 소셜 로그인(인가코드 발급) - Method: `GET` - Url: 각 소셜 로그인 문서 참고 - Parameter: - `client_id`: 앱 ID - `redirect_uri`: 인가 코드를 전달받을 프런트 URI(redirect_uri는 소셜 앱 설정에 등록해둬야 합니다.) - `response_type`: `code`로 고정 - `state`: `kakao` | `naver` | `google` | `apple` | `facebook` - Description: - 소셜 로그인을 진행할 페이지를 띄워야 하기 때문에 route를 이동해줘야 합니다. - `redirect_uri`는 소셜 로그인 후 돌아올 프런트 URI이며 쿼리와 함께 리턴 받습니다. - 소셜 로그인 후 해당 페이지에서 쿼리의 code와 state를 읽어 저장해둔다. 2. 소셜 로그인(인가코드 검증) 3. 소셜 회원가입 - `isRegister: true`인 경우 `access`, `refresh`를 저장 후 로그인 처리를 합니다. - `isRegister: false`인 경우 `socialToken`을 사용해 회원가입을 진행합니다.
   *
   * @tags user
   * @name UserSocialLoginCreate
   * @request POST:/v1/user/social_login/
   * @secure
   */
  userSocialLoginCreate = (variables: {
    data: DeepOmitReadOnly<UserSocialLoginType>;
    params?: RequestParams;
  }) =>
    this.request<UserSocialLoginType, any>({
      path: `/v1/user/social_login/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 유저 회원가입 --- - 소셜 유저인 경우 `socialToken`을 전달해야합니다.
   *
   * @tags user
   * @name UserRegisterCreate
   * @request POST:/v1/user/register/
   * @secure
   */
  userRegisterCreate = (variables: {
    data: DeepOmitReadOnly<UserRegisterType>;
    params?: RequestParams;
  }) =>
    this.request<UserRegisterType, any>({
      path: `/v1/user/register/`,
      method: 'POST',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * @description 유저 정보 ---
   *
   * @tags user
   * @name UserMeRetrieve
   * @request GET:/v1/user/me/
   * @secure
   */
  userMeRetrieve = (variables?: { params?: RequestParams }) =>
    this.request<UserMeType, any>({
      path: `/v1/user/me/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...variables?.params,
    });

  /**
   * @description 유저 정보 ---
   *
   * @tags user
   * @name UserMePartialUpdate
   * @request PATCH:/v1/user/me/
   * @secure
   */
  userMePartialUpdate = (variables: {
    data: DeepOmitReadOnly<PatchedUserMeType>;
    params?: RequestParams;
  }) =>
    this.request<UserMeType, any>({
      path: `/v1/user/me/`,
      method: 'PATCH',
      body: variables.data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...variables.params,
    });

  /**
   * No description
   *
   * @tags user
   * @name UserWithdrawalDestroy
   * @request DELETE:/v1/user/withdrawal/
   * @secure
   */
  userWithdrawalDestroy = (variables?: { params?: RequestParams }) =>
    this.request<void, any>({
      path: `/v1/user/withdrawal/`,
      method: 'DELETE',
      secure: true,
      ...variables?.params,
    });
}

export const userApi = new UserApi({ instance });

//
