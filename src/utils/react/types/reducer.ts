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

export type ActionWithReset<S, R extends ReducerMap<S, any>> =
  | ActionsByMap<S, R>
  | { type: 'RESET'; payload?: S };

export type ReducerWithResetAction<S, R extends ReducerMap<S, any>> = (
  state: S,
  action: ActionWithReset<S, R>,
) => S;

export type CreateReducerParams<S, R extends ReducerMap<S, any>> = {
  /**
   * 초기화 데이터
   */
  initialState: S;
  /**
   * 이전 상태를 받아 다음상태를 리턴하는 함수들의 집합입니다.
   * 해당 객체의 key 값이 dispatch 의 type 값이 됩니다.
   */
  reducers: R;
};

export type CreateSliceReturn<S, R extends ReducerMap<S, any>> = {
  /**
   * 초기화 데이터
   */
  initialState: S;
  /**
   * 이전 상태를 받아 다음상태를 리턴하는 함수들의 집합입니다.
   * 해당 객체의 key 값이 dispatch 의 type 값이 됩니다.
   */
  reducers: R;
  /**
   * reducers 객체의 키값과 각각의 payload 를 묶어 타입정의가 된 Reducer 함수 입니다.
   * reset action 을 추가로 가지고 있습니다.
   */
  reducer: ReducerWithResetAction<S, R>;
  /**
   * 현재 상태를 반환합니다.
   */
  getState: () => S;
  /**
   * 상태를 변경합니다.
   * @param next 다음 상태 또는 이전 상태를 받아 다음 상태를 리턴하는 함수
   */
  setState: (next: S | ((prev: S) => S)) => void;

  /**
   * action 을 dispatch 합니다. 컴포넌트 외부에서 상태를 변경할 때 주로 사용됩니다.
   * @param action reset 을 포함한 action
   */
  dispatch: (action: ActionWithReset<S, R>) => void;

  /**
   * 상태 변경을 구독합니다.
   * @returns 구독 해제 함수
   */
  subscribe: (listener: () => void) => () => void;
  /**
   * 현재 slice 를 복사합니다.
   */
  copy: () => CreateSliceReturn<S, R>;
};
