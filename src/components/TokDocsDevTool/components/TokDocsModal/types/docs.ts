import { ItemOf } from '@/types/utility/item-of';

import {
  APP_STYLE_VIEWER_DOCS,
  EXAMPLE_DOCS,
  TOK_DOCS_TOPICS,
} from '../constants/docs';

export type TokDocsMenuType = {
  kind: TopicKindType;
  name: TokDocsTopicType;
  href?: string;
  subMenu?: Array<{ name: TokDocsSubMenuTitle; href?: string }>;
};

export type TokDocsSubMenuTitle = AppStyleViewerDocsType | ExampleDocsType;

export type TopicKindType = 'IN APP';

export type TokDocsTopicType = ItemOf<typeof TOK_DOCS_TOPICS>;
export type AppStyleViewerDocsType = ItemOf<typeof APP_STYLE_VIEWER_DOCS>;
export type ExampleDocsType = ItemOf<typeof EXAMPLE_DOCS>;
