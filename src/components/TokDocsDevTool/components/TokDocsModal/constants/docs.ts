import { TokDocsMenuType } from '../types/docs';

export const TOK_DOCS_TOPICS = ['App Style Viewer', 'Example'] as const;

export const APP_STYLE_VIEWER_DOCS = [
  'generated Icons',
  'colors',
  'Chakra theme',
] as const;
export const EXAMPLE_DOCS = [
  'Context 예시',
  'redux-toolkit 예시',
  'react-hook-from 예시',
  '모달 예시',
  'throttle & debounce 예시',
  '소셜 로그인 예시',
  'S3 파일 업로드 예시',
  '토스 결제창 예시',
] as const;

export const TOK_DOCS_MENU_DATA: TokDocsMenuType[] = [
  {
    kind: 'IN APP',
    name: 'App Style Viewer',
    subMenu: [
      { name: 'generated Icons' },
      { name: 'colors' },
      { name: 'Chakra theme' },
    ],
  },
  {
    kind: 'IN APP',
    name: 'Example',
    subMenu: [
      { name: 'Context 예시' },
      { name: 'redux-toolkit 예시' },
      { name: 'react-hook-from 예시' },
      { name: '모달 예시' },
      { name: 'throttle & debounce 예시' },
      { name: '소셜 로그인 예시' },
      { name: 'S3 파일 업로드 예시' },
      { name: '토스 결제창 예시' },
    ],
  },
];
