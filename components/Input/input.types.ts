export interface inputProps {
  label?: string;
  disabled?: boolean;
  InputProps?: {
    ref?: React.Ref<HTMLInputElement>;
    className?: string;
    type?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
  };
  type?: string;
  onBlur?: () => void;
  onChange?: (text: string) => void;
  placeholder?: string;
  name?: string;
  errorText?: string;
  value?: string;
  isNullValue?: boolean;
  isReadOnly?: boolean;
  inputMaxLength?: number;

  icon?: JSX.Element;
  action?: JSX.Element;
}
