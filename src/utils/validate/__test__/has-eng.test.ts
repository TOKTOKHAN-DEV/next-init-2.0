import { hasEng } from '../has-eng';

describe('hasEng', () => {
  it('returns true if string contains a letter', () => {
    const result = hasEng('123abc');
    expect(result).toBe(true);
  });

  it('returns false if string does not contain a letter', () => {
    const result = hasEng('123');
    expect(result).toBe(false);
  });

  it('returns true if string contains uppercase letters', () => {
    const result = hasEng('ABC123');
    expect(result).toBe(true);
  });

  it('returns true if string contains lowercase letters', () => {
    const result = hasEng('abc123');
    expect(result).toBe(true);
  });

  it('returns true if string contains both uppercase and lowercase letters', () => {
    const result = hasEng('AbC123');
    expect(result).toBe(true);
  });

  it('returns false if string is empty', () => {
    const result = hasEng('');
    expect(result).toBe(false);
  });
});
