import { Obj } from '@/types/static/obj';

/**
 * @example
    type Example = NullAble<{ a: 1; b: 1 }>;
    Example = { a: 1 | null; b: 1  | null}
*/

export type NullAble<T extends Obj | undefined> = {
  [P in keyof T]: T[P] | null;
};
