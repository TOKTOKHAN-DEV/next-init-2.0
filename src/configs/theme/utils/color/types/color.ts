export type ColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorSchema = Record<ColorKey | string, string>;

export type ColorToken = {
  default?: string;
  _dark?: string;
};
