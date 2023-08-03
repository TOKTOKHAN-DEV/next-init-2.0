export const arrayToMap = <Data, SelectedKey extends string | number>(
  array: Data[],
  keySelector: (d: Data) => SelectedKey,
): Map<SelectedKey, Data> => {
  const map = new Map<SelectedKey, Data>();
  array.forEach((item) => {
    const key = keySelector(item);
    map.set(key, item);
  });
  return map;
};
