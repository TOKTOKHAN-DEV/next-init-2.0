import { hasSpecial } from '../has-special';

describe('hasSpecial', () => {
  it('returns true if string contains a special character', () => {
    const result = hasSpecial('123!@#');
    expect(result).toBe(true);
  });

  it('returns false if string does not contain a special character', () => {
    const result = hasSpecial('123');
    expect(result).toBe(false);
  });

  it('returns true if string contains multiple special characters', () => {
    const result = hasSpecial('1@3#5$');
    expect(result).toBe(true);
  });

  it('returns false if string is empty', () => {
    const result = hasSpecial('');
    expect(result).toBe(false);
  });

  it('returns true if string contains a special character and other characters', () => {
    const result = hasSpecial('a1b@c!d#');
    expect(result).toBe(true);
  });
});
