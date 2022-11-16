import { OUTER_LINKS } from '@constants/outer-links';

export const TOK_DOCS_TOPICS = [
  'Convention',
  'App Style Viewer',
  'Example',
  'Script',
  'Git Flow',
  'OnBoarding Summary',
  'Code Review',
] as const;

export const CONVENTION_DOCS = [
  'main',
  'naming',
  'code style',
  'pages folder',
  'components folder',
  'apis folder',
] as const;
export const APP_STYLE_VIEWER_DOCS = [
  'generated Icons',
  'colors',
  'break points',
  'space',
  'radius',
  'shadows',
  'letter spacing',
  'font weight',
  'text styles',
] as const;
export const EXAMPLE_DOCS = [
  'redux-toolkit 예시',
  'react-hook-from 예시',
  '모달 예시',
  'throttle & debounce 예시',
  '소셜 로그인 예시',
  'S3 파일 업로드 예시',
  '토스 결제창 예시',
] as const;
export const SCRIPT_DOCS = [
  'main',
  'gen:source',
  'gen:img',
  'gen:font',
  'gen:icon',
  'commit',
] as const;
export const GIT_FLOW_DOCS = [] as const;
export const ONBOARDING_DOCS = [
  'main',
  'publishing',
  'rtk',
  'react hook form',
  'react query',
] as const;

export type TokDocsMenuType = {
  kind: TopicKindType;
  name: TokDocsTopicType;
  href?: string;
  subMenu?: Array<{ name: TokDocsSubMenuTitle; href?: string }>;
};

export const TOK_DOCS_MENU_DATA: TokDocsMenuType[] = [
  {
    kind: 'IN APP',
    name: 'App Style Viewer',
    subMenu: [
      { name: 'generated Icons' },
      { name: 'colors' },
      { name: 'space' },
      { name: 'break points' },
      { name: 'radius' },
      { name: 'shadows' },
      { name: 'letter spacing' },
      { name: 'font weight' },
      { name: 'text styles' },
    ],
  },
  {
    kind: 'IN APP',
    name: 'Example',
    subMenu: [
      { name: 'redux-toolkit 예시' },
      { name: 'react-hook-from 예시' },
      { name: '모달 예시' },
      { name: 'throttle & debounce 예시' },
      { name: '소셜 로그인 예시' },
      { name: 'S3 파일 업로드 예시' },
      { name: '토스 결제창 예시' },
    ],
  },
  {
    kind: 'IN APP',
    name: 'Script',
    subMenu: [
      { name: 'main', href: OUTER_LINKS.NOTION_SCRIPT.MAIN },
      { name: 'gen:source', href: OUTER_LINKS.NOTION_SCRIPT.GEN_SOURCE },
      { name: 'gen:img', href: OUTER_LINKS.NOTION_SCRIPT.GEN_IMG },
      { name: 'gen:font', href: '#' },
      { name: 'gen:icon', href: OUTER_LINKS.NOTION_SCRIPT.GEN_ICON },
      { name: 'commit', href: OUTER_LINKS.NOTION_SCRIPT.COMMIT },
    ],
  },
  {
    kind: 'RULES',
    name: 'Git Flow',
    href: OUTER_LINKS.NOTION_GIT_FLOW,
  },
  {
    kind: 'RULES',
    name: 'Code Review',
    href: OUTER_LINKS.NOTION_CODE_REVIEW,
  },
  {
    kind: 'RULES',
    name: 'Convention',
    subMenu: [
      { name: 'main', href: OUTER_LINKS.NOTION_CONVENTION.MAIN },
      { name: 'naming', href: OUTER_LINKS.NOTION_CONVENTION.NAMING },
      { name: 'code style', href: OUTER_LINKS.NOTION_CONVENTION.CODE_STYLE },
      {
        name: 'pages folder',
        href: OUTER_LINKS.NOTION_CONVENTION.PAGES_FOLDER,
      },
      {
        name: 'components folder',
        href: OUTER_LINKS.NOTION_CONVENTION.COMPONENTS_FOLDER,
      },
      { name: 'apis folder', href: OUTER_LINKS.NOTION_CONVENTION.APIS_FOLDER },
    ],
  },
  {
    kind: 'RULES',
    name: 'OnBoarding Summary',
    subMenu: [
      { name: 'main', href: OUTER_LINKS.NOTION_SUMMARY.MAIN },
      { name: 'publishing', href: OUTER_LINKS.NOTION_SUMMARY.PUBLISHING },
      { name: 'rtk', href: OUTER_LINKS.NOTION_SUMMARY.RTK },
      {
        name: 'react hook form',
        href: OUTER_LINKS.NOTION_SUMMARY.REACT_HOOK_FORM,
      },
      {
        name: 'react query',
        href: OUTER_LINKS.NOTION_SUMMARY.REACT_QUERY,
      },
    ],
  },
];

export type TopicKindType = 'IN APP' | 'RULES';
export type TokDocsTopicType = TupleToUnion<typeof TOK_DOCS_TOPICS>;
export type TokDocsSubMenuTitle =
  | ConventionDocsType
  | AppStyleViewerDocsType
  | ExampleDocsType
  | ScriptDocsType
  | GitFlowDocsType
  | OnboardingDocsType;

export type ConventionDocsType = TupleToUnion<typeof CONVENTION_DOCS>;
export type AppStyleViewerDocsType = TupleToUnion<typeof APP_STYLE_VIEWER_DOCS>;
export type ExampleDocsType = TupleToUnion<typeof EXAMPLE_DOCS>;
export type ScriptDocsType = TupleToUnion<typeof SCRIPT_DOCS>;
export type GitFlowDocsType = TupleToUnion<typeof GIT_FLOW_DOCS>;
export type OnboardingDocsType = TupleToUnion<typeof ONBOARDING_DOCS>;

type TupleToUnion<T extends readonly any[]> = T[number];
