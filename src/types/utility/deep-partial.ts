import { Obj } from '@/types/static/obj';

/**
 * @example
  type Example = DeepPartial<{
    a: number;
    b: { c : number; d : string };
  }>;

  Example = {
    a?: number;
    b?: { c? : number; d? : string };
  }
*/

export type DeepPartial<T extends Obj | undefined> = Partial<{
  [K in keyof T]: T[K] extends Obj | undefined ? Partial<T[K]> : T[K];
}>;
