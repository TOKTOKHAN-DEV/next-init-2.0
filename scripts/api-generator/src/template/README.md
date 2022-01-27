### Template

## 커스텀 가능한 탬플릿

    - api.eta    # 각 swagger 상의 end-point 기준 api ex) UserApi
    - data-contract.eta    # 타입 정의 파일
    - http-client.eta    # 각 Api가 상속하는 client
    - procedure-call.eta   # Api내의 method ex) getUserList

## 폴더 설명

    ├── template
    │   ├── custom-templates       # generator 에 넘겨줄 커스텀한 템플릿 파일들이 모여있는 폴더입니다.
    │   ├── my-templates        # generator 에 넘겨줄 추가적인 탬플릿, 혹은 모듈처리된 탬플릿입니다.
    │   ├── templates-basis   # 기존에 정의 되어있는 기본 탬플릿입니다.참고용 파일이며 쓰이지 않습니다.
