export type MockedFn<T extends (...params: any) => any> = jest.Mock &
  ((...args: Parameters<T>) => ReturnType<T>);
