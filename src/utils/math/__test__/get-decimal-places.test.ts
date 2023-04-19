import { getDecimalPlaces } from '../get-decimal-places';

describe('getDecimalPlaces', () => {
  it('returns 2 for 3.14', () => {
    const result = getDecimalPlaces(3.14);
    expect(result).toBe(2);
  });

  it('returns 0 for 100', () => {
    const result = getDecimalPlaces(100);
    expect(result).toBe(0);
  });

  it('returns 4 for 0.0001', () => {
    const result = getDecimalPlaces(0.0001);
    expect(result).toBe(4);
  });

  it('returns 0 for 0', () => {
    const result = getDecimalPlaces(0);
    expect(result).toBe(0);
  });

  it('returns 3 for 123.456789', () => {
    const result = getDecimalPlaces(123.456789);
    expect(result).toBe(6);
  });
});
