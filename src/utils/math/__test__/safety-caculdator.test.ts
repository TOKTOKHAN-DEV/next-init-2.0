import { SafetyCalculator } from '../safety-caculdator';

const {
  //
  add,
  divide,
  multiply,
  subtract,
} = SafetyCalculator;

describe('SafetyCalculator', () => {
  describe('add', () => {
    it('should return 0 when given no arguments', () => {
      expect(add()).toBe(0);
    });

    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should return the sum of multiple numbers', () => {
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should return the sum of numbers with decimal places', () => {
      expect(add(0.1, 0.2)).toBe(0.3);
    });
  });

  describe('subtract', () => {
    it('should return 0 when given no arguments', () => {
      expect(subtract()).toBe(0);
    });

    it('should return the difference of two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should return the difference of multiple numbers', () => {
      expect(subtract(10, 2, 3)).toBe(5);
    });

    it('should return the difference of numbers with decimal places', () => {
      expect(subtract(0.3, 0.2)).toBe(0.1);
      expect(subtract(0.3, 0.2, 0.1)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should return 0 when given no arguments', () => {
      expect(multiply()).toBe(0);
    });

    it('should return the product of two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should return the product of multiple numbers', () => {
      expect(multiply(1, 2, 3, 4, 5)).toBe(120);
    });

    it('should return the product of numbers with decimal places', () => {
      expect(multiply(0.1, 0.2)).toBe(0.02);
    });
  });

  describe('divide', () => {
    it('should return 0 when given no arguments', () => {
      expect(divide(0, 0)).toBe(0);
    });

    it('should return 0 when denominator is 0', () => {
      expect(divide(1, 0)).toBe(0);
    });

    it('should return the quotient of two numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should return the quotient of numbers with decimal places', () => {
      expect(divide(0.3, 0.2)).toBe(1.5);
    });
  });
});
