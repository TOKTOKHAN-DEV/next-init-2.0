import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/form-control';

interface FormHelperProps extends FormControlProps {
  helperText?: string | JSX.Element;
  errorText?: string | JSX.Element;
  successText?: string | JSX.Element;
  label?: string;
  children: JSX.Element | JSX.Element[];

  labelProps?: FormLabelProps;
  successTextProps?: HelpTextProps;
  helperTextProps?: HelpTextProps;
  errorTextProps?: FormErrorMessageProps;
}

/**
 * Chakra 의 FormControll 를 Wrapping 하여 Label, Error Text, Success Text 등을 추가로 넘겨 줄수 있는 컴포넌트입니다.
 *
 * Chakra FormControl 은
 * Chakra 의 Form Element 를 children 으로 받아, isInvalid, isDisabled, isRequired 와 같은 상태를
 * 자식 Chakra Form Component 에게 Context 로 전달해줍니다.
 *
 * @see https://chakra-ui.com/docs/components/form/form-control
 * */
const FormHelper = ({
  //
  helperText,
  errorText,
  successText,
  children,
  label,

  labelProps,
  successTextProps,
  helperTextProps,
  errorTextProps,

  ...basisProps
}: FormHelperProps) => {
  const isShowErrorText = !!errorText;
  const isShowSuccessText = !!successText && !isShowErrorText;
  const isShowHelper = !!helperText && !isShowErrorText && !isShowErrorText;

  return (
    <FormControl isInvalid={!!errorText} {...basisProps}>
      {!!label && (
        <FormLabel fontWeight="bold" mb="20px" {...labelProps}>
          {label}
        </FormLabel>
      )}
      {children}
      {isShowErrorText && (
        <FormErrorMessage {...errorTextProps}>{errorText}</FormErrorMessage>
      )}
      {isShowSuccessText && (
        <FormHelperText color="custom.primary" {...successTextProps}>
          {successText}
        </FormHelperText>
      )}
      {isShowHelper && (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormHelper;
