import { isNotNull } from '../is-not-null';

describe('isNotNull', () => {
  test('should return true when value is not null or undefined', () => {
    expect(isNotNull('hello')).toBe(true);
    expect(isNotNull('')).toBe(true);
    expect(isNotNull(123)).toBe(true);
    expect(isNotNull(0)).toBe(true);
    expect(isNotNull(true)).toBe(true);
    expect(isNotNull([])).toBe(true);
    expect(isNotNull({})).toBe(true);
  });

  test('should return false when value is null or undefined', () => {
    expect(isNotNull(null)).toBe(false);
    expect(isNotNull(undefined)).toBe(false);
  });
});
