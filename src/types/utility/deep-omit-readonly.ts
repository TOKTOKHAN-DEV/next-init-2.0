import { Obj } from '@/types/static/obj';

import { ReadonlyKeysOf } from './readonly-keys-of';

/**
 * @example
  type Example = OmitReadOnly<{
    readonly a: number;
    readonly b: string;
    c: { readonly d : number; e : string };
  }>;

  Example = { c : { e: string }; }
*/

export type DeepOmitReadOnly<T extends Obj | undefined> = Omit<
  {
    [P in keyof T]: T[P] extends Obj | undefined
      ? DeepOmitReadOnly<NonNullable<T[P]>>
      : T[P];
  },
  ReadonlyKeysOf<NonNullable<T>>
>;
