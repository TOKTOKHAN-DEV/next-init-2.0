import {
  APP_STYLE_VIWER_DOCS,
  AppStyleViwerDocsType,
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

const isAppStyleViewerDocsTitle = (v: any): v is AppStyleViwerDocsType =>
  APP_STYLE_VIWER_DOCS.includes(v);

const isScriptDocsTitle = (v: any): v is ScriptDocsType =>
  SCRIPT_DOCS.includes(v);

const isExampleDocsTitle = (v: any): v is ExampleDocsType =>
  EXAMPLE_DOCS.includes(v);
