/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  IMP: any;
}

type Obj = Record<string, unknown>;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
type NullRecord<K extends keyof any, T> = Record<K, T | null>;

type NullAble<T> = {
  [P in keyof T]: T[P] | null;
};

type ValueOf<T> = T extends Obj ? T[keyof T] : unknown;

type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

type Parameter<T> = T extends (param: infer U) => any ? U : never;

type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;
