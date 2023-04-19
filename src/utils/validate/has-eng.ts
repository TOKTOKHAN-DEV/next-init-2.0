export const hasEng = (value: string) => {
  const rgx = /[a-zA-Z]/;
  return rgx.test(value);
};
