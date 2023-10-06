import { IfEquals } from './if-equals';

/**
 * @example
    type Example = ReadonlyKeysOf<{
      readonly a: number;
      b: string;
      readonly c: string;
    }>;
    Example1 = "a" | "c"
*/

export type ReadonlyKeysOf<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];
