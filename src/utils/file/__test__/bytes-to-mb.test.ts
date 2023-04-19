import { bytesToMB } from '../bytes-to-mb';

describe('bytesToMB', () => {
  it('returns the correct value for 1 byte', () => {
    const result = bytesToMB(1);
    expect(result).toBe(9.5367431640625e-7);
  });

  it('returns the correct value for 1024 bytes', () => {
    const result = bytesToMB(1024);
    expect(result).toBe(0.0009765625);
  });

  it('returns the correct value for 1048576 bytes', () => {
    const result = bytesToMB(1048576);
    expect(result).toBe(1);
  });

  it('returns the correct value for 1000000 bytes', () => {
    const result = bytesToMB(1000000);
    expect(result).toBe(0.95367431640625);
  });

  it('returns 0 for 0 bytes', () => {
    const result = bytesToMB(0);
    expect(result).toBe(0);
  });
});
