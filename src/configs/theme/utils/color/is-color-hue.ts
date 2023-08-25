import { CustomColors } from '../../foundations/semantic-tokens/colors';
import { isObject } from './is-object';

export const colorHueKeys = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;

export const getKeys = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;

export function isColorHue(value: CustomColors[keyof CustomColors]): boolean {
  if (!isObject(value)) return false;

  const hasHueArray = getKeys(value).filter(
    (key) =>
      key.includes('default_gen') ||
      (isObject(value[key]) &&
        colorHueKeys.every((hueKey) => value[key]?.[hueKey])),
  );
  return hasHueArray.length > 0;
}
