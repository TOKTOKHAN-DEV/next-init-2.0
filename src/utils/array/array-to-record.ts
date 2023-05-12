export const arrayToRecord = <Data, SelectedKey extends string | number>(
  array: Data[],
  keySelector: (d: Data) => SelectedKey,
) => {
  return array.reduce((prev, cur) => {
    const key = keySelector(cur);
    return { ...prev, [key]: cur };
  }, {} as Record<SelectedKey, Data>);
};
