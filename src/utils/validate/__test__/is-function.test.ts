/* eslint-disable @typescript-eslint/no-empty-function */
import { isFunction } from '../is-function';

describe('isFunction', () => {
  test('should return true for function types', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(async function () {})).toBe(true);
    expect(isFunction(function* () {})).toBe(true);
    expect(isFunction(class Test {})).toBe(true);
  });

  test('should return false for non-function types', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
  });
});
