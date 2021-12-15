import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Flex, Box, Text, ThemeComponentProps } from '@chakra-ui/react';
import { inputProps } from './input.types';

export const Input: React.FC<inputProps> = ({
  name,
  type,
  onChange,
  onBlur,
  label,
  placeholder,
  value,
  disabled,
  InputProps,
  action,
  errorText,
  isNullValue,
  isReadOnly,
  icon,
  inputMaxLength = 30,
  ...props
}) => {
  const [text, setText] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const onFocusInput = () => {
    setFocused(true);
  };
  const onBlurInput = () => {
    if (onBlur) {
      onBlur();
    }
    if (!text) {
      setFocused(false);
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setText(val);
    if (onChange) {
      onChange(val);
    }
  };

  const limitInput = (e: React.ChangeEvent<HTMLInputElement>, maxLength = inputMaxLength) => {
    const limit = maxLength;
    if (e.target.value.length > limit) {
      e.target.value = e.target.value.slice(0, limit);
    }
  };

  return (
    <Box {...props} w="100%">
      {label && <Text sm>{label}</Text>}
      <Flex alignItems="center" justifyContent="center" position="relative" borderColor="custom.gray3" borderBottomWidth={icon ? '2px' : 'none'}>
        <Flex w="100%" direction={icon ? 'row' : 'column'}>
          {icon && (
            <Flex alignItems="center" justifyContent="center" mr="10px">
              {icon}
            </Flex>
          )}
          <CustomInput
            {...InputProps}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={changeHandler}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            icon={icon ? 1 : 0}
            isNullValue={isNullValue}
            readOnly={isReadOnly}
            onInput={limitInput}
            error={errorText ? 1 : 0}
          />
          <Hr focused={focused || text ? 1 : 0} icon={icon ? 1 : 0} error={errorText ? 1 : 0} />
        </Flex>
        {action && <Box ml="10px">{action}</Box>}
      </Flex>
      {errorText && (
        <Text textStyle="sm" color="warning" mt="10px">
          {errorText}
        </Text>
      )}
    </Box>
  );
};

interface StyleProp {
  isNullValue?: boolean;
  error: number;
  icon: number;
  focused?: number;
  theme?: ThemeComponentProps;
}

const CustomInput = styled.input<StyleProp>`
  all: unset;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};

  &::placeholder {
    color: #eee;
  }

  ${(props) =>
    props.icon &&
    css`
      border: none;
      border-bottom: none;
    `}

  ${(props) =>
    props.isNullValue &&
    css`
      > input:disabled {
        border-bottom: 1px solid ${props.theme.colors.gray3};
        background: none;
      }
    `}
    ${(props) =>
    props.error &&
    css`
      > input:disabled {
        border-bottom: 1px solid ${props.theme.colors.warning};
        background: none;
      }
    `}
`;

const Hr = styled(Box)<StyleProp>`
  z-index: 10;
  position: absolute;
  bottom: -0.5px;
  transition: 0.2s ease;
  width: 0%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary[500]};

  ${(props) =>
    props.icon &&
    css`
      bottom: -1.5px;
    `}
  ${(props) =>
    props.focused &&
    css`
      width: 100%;
    `};
  ${(props) =>
    props.error &&
    css`
      width: 100%;
      background-color: ${props.theme.colors.warning};
    `}
`;
