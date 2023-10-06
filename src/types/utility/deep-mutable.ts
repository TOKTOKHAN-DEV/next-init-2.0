import { Mutable } from './mutable';

/**
 * @example
    type Example = DeepMutable<{
      readonly a: number;
      readonly b: { readonly c: number; readonly d: string };
    }>;

    Example = {
      a: number;
      b?: { c? : number; d? : string };
    }
 */

export type DeepMutable<T extends Record<any, any> | undefined> = Mutable<{
  [K in keyof T]: T[K] extends Record<any, any> | undefined
    ? Mutable<T[K]>
    : T[K];
}>;
