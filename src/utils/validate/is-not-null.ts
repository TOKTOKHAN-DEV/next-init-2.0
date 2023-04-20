export const isNotNull = <T>(value: T): value is NonNullable<T> => {
  if (typeof value === 'undefined') return false;
  if (value === null) return false;
  return true;
};
