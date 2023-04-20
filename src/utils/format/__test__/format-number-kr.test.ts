import { formatNumberKR } from '../format-number-kr';

describe('formatNumberKR', () => {
  it('should format number to Korean locale string', () => {
    expect(formatNumberKR(1000000)).toBe('1,000,000');
    expect(formatNumberKR(123456789)).toBe('123,456,789');
    expect(formatNumberKR(1234.567)).toBe('1,234.567');
    expect(formatNumberKR(-987654321)).toBe('-987,654,321');
    expect(formatNumberKR(0)).toBe('0');

    // 주의 : 소수점4째 자리 부터는 반올림 처리 됩니다.
    expect(formatNumberKR(1234.5674)).toBe('1,234.567');
    expect(formatNumberKR(1234.5676)).toBe('1,234.568');
  });
});
