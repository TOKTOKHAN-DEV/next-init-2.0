export const hasNum = (value: string) => {
  const rgx = /[0-9]/;
  return rgx.test(value);
};
