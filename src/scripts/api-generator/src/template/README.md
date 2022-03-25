## Template

### 폴더 설명

    ├── template
    │   ├── custom-templates    # generator 에 넘겨줄 수있는 커스텀한 템플릿 파일들이 모여있는 폴더입니다.
    │   ├── my-templates        # generator 에 넘겨줄 추가적인 탬플릿, 혹은 모듈처리된 탬플릿입니다.
    │   ├── templates-basis     # 기존에 정의 되어있는 기본 탬플릿입니다.참고용 파일이며 쓰이지 않습니다.

### 커스텀 가능한 탬플릿

#### custom-templates

    - api.eta    # swagger의 end-point 기준 api 템플릿 ex) UserApi
    - data-contract.eta    # 타입 정의 템플릿
    - http-client.eta    # 각 Api가 상속하는 client 템플릿
    - procedure-call.eta   # Api내의 method 템플릿 ex) getUserList

#### my-templates

    - react-query-hook.eta    # react-query hook 생성 탬플릿
    - react-query-key.eta    # react-query key 생성 탬플릿
    - react-query-type.eta    # react-query 관련 타입 탬플릿
