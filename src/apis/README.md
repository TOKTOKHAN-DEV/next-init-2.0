# apis 폴더 컨벤션

네트워크 관련 api 가 정의 되어있는 폴더 입니다.
기본적으로 스웨거의 태그를 기준으로 폴더가 만들어집니다

## 폴더 구조

apis

\_axios

\_mock

type.d.ts

...

## Management

똑똑한 개발자는 프로젝트마다 스웨거 문서가 존재합니다.
스웨거에서 API 는 Tag 로 그룹핑 되어집니다.
다른 사람이 봤을 때, Swagger 문서와 같이 폴더구조를 한눈에 파악할 수 있도록
Swagger 의 Tag 명과 동일하게 폴더를 구성 해 줍니다.

소문자와 대쉬로 작성해주세요 ex)my-api

#### Script

아래의 스크립트로 컨벤션에 맞는 CRUD 와 React Hooks 를 포함한 Api 템플릿을 생성할 수 있습니다.

```shell
npm run gen:source
```

## File Naming

**LEVEL 3** 😈 파일명은 폴더명(태그명) + Api 에 종류별로 suffix 를 붙여 구분해줍니다.PascalCase 로 작성해주세요

**apis/[folder-name]**

- [FolderName]Api.ts:

axios 를 사용하여 네트워크 통신을 처리하는 api 입니다.

- [FolderName]Api.query.ts:

Post.api.ts 에서 GET method 에 해당하는 함수를 React-Query 의 useQuery 으로 랩핑한 커스텀 훅의 집합입니다

- [FolderName]Api.mutation.ts:

Post.api.ts 에서 POST, PUT, PATCH , DELETE 요청에 해당하는 함수를 React-Query 의 useMutation 으로 랩핑한 커스텀 훅의 집합입니다

- [FolderName]Api.type.ts:

해당 api 경로에서 사용되는 데이터 타입의 집합입니다.

## [FolderName]Api.ts

**LEVEL 3** 😈  Api 들을 하나의 클래스로 추상화해주세요.

나를 포함한 동료들이 코드를 찾기 쉬워집니다

**LEVEL 3** 😈 Axios Instance 를 받아서 사용하게 끔 만들어 주세요

instance 가 달라 질 수 있는 경우에 대응하기 쉬워집니다.

**LEVEL 3** 😈 class method 의 네이밍은, request 의 method 네이밍을 prefix 로 붙여서 사용해주세요

나를 포함한 동료들이 코드를 파악하기 쉬워집니다 ex) GET: getPost, PATCH: patchPost

**LEVEL 3** 😈 class method 의 인자는 반드시 1개 이하 이어야 합니다. 2개 이상일시 객체로 넘겨주세요

리액트 쿼리로 랩핑할때 class 의 method 인자는 커스텀 타입정의에 의해 variables 라는 단일 값으로 관리가 되기 때문에 하나의 인자로 작성해주세요 자세한 사항은 —— 에서 확인 가능합니다

**LEVEL 3** 😈 class method 의 인자타입과 리턴타입을 반드시 명시 해주세요.

코드를 파악하기 쉬워지고, 리액트 쿼리 훅 커스텀 타입이 인자와 리턴타입을 추출하여, 보다 정확한 타입을 제공할 수 있습니다.

🧭 **Example**

```tsx
import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

class PostApi {
  constructor(private axios: AxiosInstance = instance) {
    this.axios = axios;
  }

  async getPosts(params: SomePramType): SomeReturnType {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/posts`,
      params,
    });
    return data;
  }

  async createPost(body: SomeBodyType):SomeReturnType {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/posts`,
      data: body,
    });
    return data;
  }

  ...
}

const postApi = new PostApi();

export default postApi;
```

## [FolderName]Api.query.ts

**LEVEL 3** 😈 미리 정의 된 QueryHookParams 를 통해 인자 타입을 정의해 주세요

**LEVEL 3** 😈 QUERY_KEY 라는 constants 로 관리되는 쿼리 키를 통해, 쿼리키를 관리해주세요

**LEVEL 3** 😈 네이밍은 use[targetMethod]Query 형태로 만들어주세요

**LEVEL 1** 😇 쿼리키는 배열을 리턴하는 함수로 만들어서, params 에 대응하게끔 관리해주세요

🧭 **Example**

```tsx
import { useQuery } from 'react-query';
import postApi from './PostApi.ts';
import { QueryHookParams } from 'apis/type';
import { QUERY_KEY } from 'constants/query-keys';
export const useGetPostsQuery = (params: QueryHookParams<typeof postApi.getPosts>) => {
  return useQuery(QUERY_KEY.POST.GET(params?.variables), () => postApi.getPosts(params?.variables), params?.options);
};
```

## [FolderName]Api.query.ts

**LEVEL 3** 😈 미리 정의 된 MutationHookParams 를 통해 인자 타입을 정의해 주세요

**LEVEL 3** 😈 QUERY_KEY 는 많은 경우에서 사용되지 않지만 필요한 경우 query 와 같이 QUERY_KEY 로 관리되는 값으로 사용해주세요

**LEVEL 3** 😈 네이밍은 use[targetMethod]Mutation 형태로 만들어주세요

🧭 **Example**

```tsx
import { useMutation } from 'react-query';
import postApi from './PostApi.ts';
import { MutationHookParams } from 'apis/type';
export const useDeletePostMutation = (params?: MutationHookParams<typeof postApi.deletePost>) => {
  return useMutation(postApi.deletePost, { ...params?.options });
};
```

## [FolderName]Api.type.ts

Api 에 대한 타입정의를 [FolderName]Api.ts 에서 분리하고 싶을경우 분리해주세요

**LEVEL 1** 😇 타입 정의시 field 별로 /\*_ ... _/ 형태로 주석을 달아주세요

나 혹은 동료가 값에 대한 정의를 보기 위해 스웨거에 들어갈 일이 적어집니다. js-doc 문법으로써, vscode 에디터를 쓰고 있다면 해당 field 가 사용되는 곳에서 hover 시 바로 주석을 볼수 있습니다.

```tsx
type BuildingDataType = {
...
  /** 도로명주소  */
  addressLoad: string;
  /** 건물관리번호  */
  building?: string;
  /** 대지위치 */
  platPlc?: string;
  /** 대지면적(㎡) */
  platArea?: number;
  /** 대지면적(평) */
  platAreaP?: number;
  /** 지구지역 */
  jiyukCdNm?: string;
...
}

```
