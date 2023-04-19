import { mbToBytes } from '../mb-to-bytes';

describe('mbToBytes', () => {
  it('returns the correct value for 1 MB', () => {
    const result = mbToBytes(1);
    expect(result).toBe(1048576);
  });

  it('returns the correct value for 0.5 MB', () => {
    const result = mbToBytes(0.5);
    expect(result).toBe(524288);
  });

  it('returns the correct value for 0.1 MB', () => {
    const result = mbToBytes(0.1);
    expect(result).toBe(104857.6);
  });

  it('returns the correct value for 0 MB', () => {
    const result = mbToBytes(0);
    expect(result).toBe(0);
  });
});
