/**
 * @example
    type Example = Mutable<{ readonly a: 1; b: 1 }>;
    Example = { a: 1; b: 1; }
 */

export type Mutable<T extends Record<any, any> | undefined> = {
  -readonly [key in keyof T]: T[key];
};
