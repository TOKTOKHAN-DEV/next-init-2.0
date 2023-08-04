# 프론트 체크리스트

더 좋은 앱 퀄리티를 위한 체크리스트 입니다.
**가이드라인**으로써 정기적으로 확인하고 업데이트 해주세요.

#### Script

체크리스트 progress 를 업데이트 하는 스크립트입니다.

- path: src/scripts/update-checklist-progress.js

```(bash)
yarn run checklist:progress
```

#### Progress

![progress](https://geps.dev/progress/21)

#### Advance Progress

![advanced-progress](https://geps.dev/progress/0)

#### Check List

**✅ 프로젝트**

- [x] 시작하는 프로젝트의 일정 파악이 이루어졌는가?
- [x] 프로젝트 또는 사용하고자 하는 라이브러리 버전에 맞는 노드 버전을 채택 하고있는가?
- [x] 특정 기능을 위해 사용할 라이브러리에 대한 검토가 이루어졌는가?
- [x] Sample 코드를 제거하였는가?

**✅ Git**

- [ ] 프로젝트 Repository 를 생성 하였는가?
- [x] Repository에 대한 Access 권한을 부여 받았는가?
- [x] 형상 관리를 위한 브랜치 전략을 수립하였는가?
  - [ ] 운영 브랜치(main)
  - [ ] 릴리즈 브랜치(release) **`Advanced`**
  - [ ] QA 브랜치(qa) **`Advanced`**
  - [ ] 개발 브랜치(develop)
  - [ ] 기능 브랜치(feature)

**✅ Style**

- [ ] Figma 디자인 시스템에 맞게 config 설정을 하였는가?
  - [ ] Font-Family **`Tokript`**
  - [ ] Colors
  - [ ] Typography
  - [ ] Break Point(viewport 기준)
  - [ ] Container (/single/components/container)
  - [ ] Icongraphy **`Tokript`**
- [ ] Chakra Theme Component Setting **`Advanced`**
- [ ] 스켈레톤 UI 또는 스피너와 같은 로딩처리 UI가 적용되어 있는가? **`Advanced`**

**✅ 반응형(Responsive Web)**

_→ 체크리스트 추가
→ ex) Aspect Ratio_

**✅ Feature**

- [ ] Form의 유효성 검사가 적용되어 있는가?
- [ ] 불필요한 `console.log` 제거
- [ ] 이미지에 대한 대체 텍스트(alt)가 적용되어 있는가? **`Tokript`**

**✅ Memoization & Optimization `Advanced`**

- [ ] `useCallabck`
- [ ] `useMemo`
- [ ] `memo`

**✅ 퀄리티 체크 `Advanced`**

- [ ] constants / 유틸함수 리팩터링
- [ ] 불필요한 API 중복 호출 방지
- [ ] API 호출 query paramater 라우팅 적용
      → _문구 수정 필요 url parameter(query parmas)_

**✅ API**

- [ ] tokript config 설정을 하였는가? **`Tokript`**
- [ ] swagger를 전달 받았는가?
- [ ] useQuery, useInfiniteQuery를 구분하여 적절한 용도로 사용하였는가? **`Tokript`**
      → `gen:source`
- [ ] Axios 설정 **`Advanced`**
- [ ] React-query 설정 **`Advanced`**
- [ ] 에러 핸들링 처리가 되었는가? **`Advanced`**

**✅ SEO**
_→ next-seo 라이브러리 적용중_
**\***→ 어디에 SEO가 명시되어야하는지 표시할 필요 있음 (\_documents.tsx)\*

- [ ] page에 맞는 title 삽입
- [ ] page에 맞는 description 삽입
- [ ] open graph 삽입
- [ ] twitter og 삽입
- [ ] favicon 삽입
- [ ] apple-touch-icon 삽입
- [ ] canonical tag **`Advanced`**
- [ ] robots.txt **`Advanced`**
- [ ] sitemap.json **`Advanced`**
- [ ] manifest.json **`Advanced`**

**✅ Secure `Advanced`**

- [ ] XSS(Cross-site scripting) 취약점 조치

**✅ 외부 협업 `Advanced`**

- [ ] 외부 클라이언트에서 제공한 VPN 계정을 설정 및 연결하였는가?
- [ ] 외부 클라이언트의 개발 가이드 및 컨벤션 자료를 확인하였는가?
      예시) 깃랩, 아틀라시안 서비스

**✅ 웹 표준(Web Standards) `Advanced`**

- [ ] 웹 표준 검사를 진행하였는가?
      예시) [https://validator.kldp.org/](https://validator.kldp.org/) (W3C의 한국어 HTML Validation 서비스)

**✅ 웹 접근성(Web Accessibility) `Advanced`**

**`인식의 용이성`**

- [ ] 콘텐츠의 의미나 용도를 파악할 수 있는 적절한 대체 텍스트를 제공 하였는가?
- [ ] 멀티미디어 컨텐츠에 대한 대체 수단(자막, 원고, 수화)를 제공 하였는가?
- [ ] 지시사항을 크기, 위치, 방향, 색에 관계 없이 인식할 수 있도록 제공 하였는가?
- [ ] 자동으로 재생되는 소리가 없거나, 3초 이내 혹은 바로 정지할 수 있는 컨텐츠를 사용하였는가?
- [ ] 이웃한 컨텐츠 간에 테두리, 구분선, 서로 다른 패턴 등을 사용하여 시각적으로 구분되도록 제공 하였는가?
      → 마우스 오버나 키보드 포커스 시 시각적으로 구분할 수 있는 방법을 제공할 경우 오류가 아니다.

**`운용의 용이성`**

- [ ] 키보드 사용 보장
- [ ] 키보드 사용시 초점 이동
- [ ] 조작 가능
- [ ] 응답시간 조절
- [ ] 정지 기능 제공
- [ ] 깜빡임과 번쩍임 사용 제한
- [ ] 반복 영역 건너뛰기
- [ ] 페이지, 프레임, 컨텐츠 블록에 적절한 제목을 제공
- [ ] 적절한 링크 텍스트

**`이해의 용이성`**

- [ ] 문서 타입에 맞는 기본 언어 표시
- [ ] 사용자가 의도하지 않은 기능이 아닌 요구에 따른 기능 실행
- [ ] 컨텐츠의 계층구조를 이해할 수 있도록 순서가 논리적(선형 구조)으로 제공
- [ ] 표를 이해할 수 있도록 정보 제공
- [ ] 라벨 제공

웹 접근성 reference ) [https://medium.com/@yujso66/번역-웹-접근성-마스터하기-프런트엔드-개발자를-위한-가이드-cdac7a1e2710](https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1-%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0-%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-cdac7a1e2710)

**✅ 크로스 브라우징(Cross Browsing) `Advanced`**

- [ ] 크로스 브라우저를 개발하기 위해 CSS 속성 앞에 브라우저 별 접두사(Vender Prefix)를 사용하였는가?
      예시) -webkit-, -moz-, -o-, -ms-
- [ ] Safari 브라우저에서 특정 UI가 Chrome 브라우저와 동일하게 표시 되는가?
      예시) 가로 스크롤 바, 세로 스크롤 바

**✅ 다국어 설정 `Advanced`**

**`모듈 설정`**

- [ ] next-i18next.config 파일을 생성하고 locale 설정을 하였는가
      예시) 언어 초기값 설정, 사용되는 언어 목록 등
- [ ] next-i18next.config 모듈을 next-config에서 import 하였는가?
- [ ] 다국어 기능이 적용 될 json 파일을 생성하였는가?
      예시) about페이지에 사용될 json파일 경로: public/locales/en/about.json

**`렌더링 전 다국어 정보 제공`**

- [ ] 각 페이지의 index 컴포넌트: getStaticProps / getServerSideProps
- [ ] Dynamic route 페이지의 index 컴포넌트: getStaticPaths → 동적 path에 locale 정보를 제공

**`활용`**

- [ ] 다국어가 사용되는 API에 locale 정보를 제공하였는가?
- [ ] 하나의 파일에서 여러 json을 사용할 경우 ns(namespace)를 적절히 사용하였는가?
- [ ] 텍스트 부분 스타일링 시 <Trans> 태그를 적절히 사용하였는가?
