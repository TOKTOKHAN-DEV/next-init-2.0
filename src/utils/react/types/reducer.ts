export type ReducerMapFn<S, P> = (state: S, payload: P) => S | void;

export type ReducerMap<S, P> = Record<string, ReducerMapFn<S, P>>;

export type PayloadFrom<T> = T extends ReducerMapFn<any, infer P> ? P : never;

export type ActionsByMap<S, R extends ReducerMap<S, any>> = {
  [key in keyof R]: undefined extends PayloadFrom<R[key]>
    ? {
        type: key;
        payload?: PayloadFrom<R[key]>;
      }
    : {
        type: key;
        payload: PayloadFrom<R[key]>;
      };
}[keyof R];
