import { Obj } from '@/types/static/obj';

import { NullAble } from './nullable';

/**
 * @example 
    type Example = DeepNullAble<{
      a: number;
      b: { c : number; d : string };
    }>;

    Example = {
      a: number | null;
      b?: { c? : number | null; d? : string | null } | null;
    }
*/

export type DeepNullAble<T extends Obj | undefined> = NullAble<{
  [K in keyof T]: T[K] extends Obj | undefined ? NullAble<T[K]> : T[K];
}>;
