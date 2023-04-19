export const getDecimalPlaces = (number: number) => {
  const decimalPart = number.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};
