type ColorProps = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};
type Color = {
  primary: ColorProps;
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
  dark: ColorProps;
  gray: ColorProps;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  modal: string;
};

export default Color;
