export type DeepOmitReadOnly<T extends object | undefined> = Omit<
  {
    [P in keyof T]: T[P] extends object | undefined
      ? DeepOmitReadOnly<NonNullable<T[P]>>
      : T[P];
  },
  ReadonlyKeys<NonNullable<T>>
>;

export type OmitReadOnly<T extends object> = Omit<T, ReadonlyKeys<T>>;

export type ReadonlyKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;
