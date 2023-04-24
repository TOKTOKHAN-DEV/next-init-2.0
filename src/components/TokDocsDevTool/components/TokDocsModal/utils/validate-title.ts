import { APP_STYLE_VIEWER_DOCS, EXAMPLE_DOCS } from '../constants/docs';
import { AppStyleViewerDocsType, ExampleDocsType } from '../types/docs';

export const isAppStyleViewerDocsTitle = (
  v: any,
): v is AppStyleViewerDocsType => APP_STYLE_VIEWER_DOCS.includes(v);

export const isExampleDocsTitle = (v: any): v is ExampleDocsType =>
  EXAMPLE_DOCS.includes(v);
