type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  'primary.sub': string;
  'secondary.sub': string;
  'tertiary.sub': string;
  point: string;
  'point.sub': string;
  warning: string;
  'warning.sub': string;
  success: string;
  'success.sub': string;
  black: string;
  white: string;
  gray: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  modal: string;
};

export default Color;
