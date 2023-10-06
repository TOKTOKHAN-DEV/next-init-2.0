/**
 * @example
  type Example1 = IfEquals<number, string, true, false>;
  type Example2 = IfEquals<number, number, true, false>;

  Example1 = true
  Example2 = false
*/

export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;
