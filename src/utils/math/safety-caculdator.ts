import { getDecimalPlaces } from './get-decimal-places';

export class SafetyCalculator {
  static getMaxDecimalPlaces(...args: number[]) {
    return Math.max(...args.map(getDecimalPlaces));
  }

  static multiply = (...args: number[]) => {
    if (!args.length) return 0;
    const dem = this.getMaxDecimalPlaces(...args);
    const multiplier = 10 ** dem || 1;
    return args.reduce(
      (acc, cur) => (acc * (cur * multiplier)) / multiplier,
      1,
    );
  };

  static divide = (a: number, b: number) => {
    if (!a || !b) return 0;
    const dem = this.getMaxDecimalPlaces(a, b);
    const multiplier = 10 ** dem || 1;
    return (a * multiplier) / (b * multiplier);
  };

  static add = (...args: number[]) => {
    if (!args.length) return 0;
    const dem = this.getMaxDecimalPlaces(...args);
    const multiplier = 10 ** dem || 1;

    return args.reduce((acc, cur) => acc + cur * multiplier, 0) / multiplier;
  };

  static subtract = (...args: number[]) => {
    if (args.length === 0) return 0;
    if (args.length === 1) return args[0];

    const dem = this.getMaxDecimalPlaces(...args);
    const multiplier = 10 ** dem;

    const result = args.reduce(
      (acc, cur) => acc - cur * multiplier,
      args[0] * multiplier * 2,
    );

    return result / multiplier;
  };
}
