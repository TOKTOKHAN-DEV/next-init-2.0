import { sum } from './sum';

describe('sum', () => {
  it('should equal 3 when 1 and 2 are given', () => {
    const actual = sum(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
