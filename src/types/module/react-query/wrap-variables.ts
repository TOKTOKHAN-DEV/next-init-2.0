export type WrapVariables<T> = undefined extends T
  ? { variables?: T }
  : { variables: T };
