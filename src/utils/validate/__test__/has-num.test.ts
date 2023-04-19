import { hasNum } from '../has-num';

describe('hasNum', () => {
  it('returns true if string contains a number', () => {
    const result = hasNum('abc123');
    expect(result).toBe(true);
  });

  it('returns false if string does not contain a number', () => {
    const result = hasNum('abc');
    expect(result).toBe(false);
  });

  it('returns true if string contains multiple numbers', () => {
    const result = hasNum('a1b2c3');
    expect(result).toBe(true);
  });

  it('returns false if string is empty', () => {
    const result = hasNum('');
    expect(result).toBe(false);
  });

  it('returns true if string contains a number and other characters', () => {
    const result = hasNum('abc123def');
    expect(result).toBe(true);
  });
});
