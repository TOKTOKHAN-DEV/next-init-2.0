export const hasSpecial = (value: string) => {
  const rgx = /[~!@#$%^&*()_+|<>?:{}]/;
  return rgx.test(value);
};
