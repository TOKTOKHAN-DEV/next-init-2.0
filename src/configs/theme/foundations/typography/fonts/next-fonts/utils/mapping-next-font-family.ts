import { NextFont } from 'next/dist/compiled/@next/font';

export const mappingNextFontFamily = <T extends Record<string, NextFont>>(
  fonts: T,
): Record<keyof T, string> => {
  return Object.entries(fonts).reduce((prev, curr) => {
    const [key, value] = curr;
    return {
      ...prev,
      [key]: value.style.fontFamily,
    };
  }, {} as Record<keyof T, string>);
};
