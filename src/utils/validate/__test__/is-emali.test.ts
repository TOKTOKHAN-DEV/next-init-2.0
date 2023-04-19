import { isEmail } from '../is-emali';

describe('isEmail', () => {
  it('returns true if value is a valid email', () => {
    const result = isEmail('test@example.com');
    expect(result).toBe(true);
  });

  it('returns false if value is not a valid email', () => {
    const result = isEmail('test@');
    expect(result).toBe(false);
  });

  it('returns false if value is an empty string', () => {
    const result = isEmail('');
    expect(result).toBe(false);
  });

  it('returns false if value does not have a TLD', () => {
    const result = isEmail('test@example');
    expect(result).toBe(false);
  });

  it('returns true if value has a valid subdomain', () => {
    const result = isEmail('test@sub.example.com');
    expect(result).toBe(true);
  });
});
