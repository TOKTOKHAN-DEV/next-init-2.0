import { runIfFn } from '../run-if-fn';

describe('runIfFn', () => {
  test('should return the value when it is not a function', () => {
    expect(runIfFn('hello')).toBe('hello');
    expect(runIfFn(123)).toBe(123);
    expect(runIfFn({ name: 'John' })).toEqual({ name: 'John' });
  });

  test('should run the function and return its result when it is a function', () => {
    const add = (a: number, b: number) => a + b;
    expect(runIfFn(add, 2, 3)).toBe(5);

    const concat = (str1: string, str2: string) => str1 + ' ' + str2;
    expect(runIfFn(concat, 'hello', 'world')).toBe('hello world');

    const greet = (name: string) => `Hello, ${name}!`;
    expect(runIfFn(greet, 'John')).toBe('Hello, John!');
  });
});
