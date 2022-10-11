import {
  APP_STYLE_VIEWER_DOCS,
  AppStyleViewerDocsType,
  EXAMPLE_DOCS,
  ExampleDocsType,
  SCRIPT_DOCS,
  ScriptDocsType,
} from '../TokDocsModal.data';

export function useTokDocsTitleValidate() {
  return {
    isAppStyleViewerDocsTitle,
    isScriptDocsTitle,
    isExampleDocsTitle,
  };
}

const isAppStyleViewerDocsTitle = (v: any): v is AppStyleViewerDocsType =>
  APP_STYLE_VIEWER_DOCS.includes(v);

const isScriptDocsTitle = (v: any): v is ScriptDocsType =>
  SCRIPT_DOCS.includes(v);

const isExampleDocsTitle = (v: any): v is ExampleDocsType =>
  EXAMPLE_DOCS.includes(v);
