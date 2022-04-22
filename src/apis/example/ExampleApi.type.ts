export type ExampleDTOType = {};
export type ExampleParamGetType = {};
export type ExampleParamPutType = {
  id: string;
  data: ExampleDTOType;
};
export type ExampleParamPatchType = {
  id: string;
  data: Partial<ExampleDTOType>;
};
