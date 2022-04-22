/* eslint-disable no-use-before-define */
import React from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';

import { useTheme } from '@chakra-ui/react';

import styled from '@emotion/styled';

interface CustomSelectProps {
  chooseType?: any;
}

const CustomSelect = ({
  chooseType,
  ...props
}: CustomSelectProps & ReactSelectProps) => {
  const theme = useTheme();
  const handleChange = (e: any) => {
    chooseType(e.value);
  };

  return (
    <Wrap>
      <StyledReactSelect
        {...props}
        customTheme={theme}
        classNamePrefix={'Select'}
        onChange={handleChange}
      />
    </Wrap>
  );
};

export default CustomSelect;

interface WrapStyleProps {
  width?: string;
}

const Wrap = styled.div<WrapStyleProps>`
  width: ${({ width }) => (width ? width : '100%')};
`;

const StyledReactSelect = styled(Select)<{ customTheme: any }>`
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.customTheme.colors.white};
  }

  & .Select {
    &__control {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.customTheme.colors.gray[900]};
      border-color: ${(props) => props.customTheme.colors.gray[900]};
      height: 50;
      border-radius: 10px;
      box-shadow: none !important;
    }

    &__menu {
      margin: 0;
      top: calc(100% - 2px);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
      box-shadow: 'none';
      border-width: 0px;
      background-color: ${(props) => props.customTheme.colors.gray[900]};
      color: ${(props) => props.customTheme.colors.white};
      &-list {
        padding: 0;
        border-top-width: 1px;
        border-top-color: ${(props) => props.customTheme.colors.gray[900]};
      }
    }

    &__option {
      height: 50;
      display: 'flex';
      align-items: 'center';
      font-weight: bold;
      &--is-selected {
        background-color: ${(props) => props.customTheme.colors.gray[900]};
      }
      &--is-focused {
        background-color: ${(props) => props.customTheme.colors.gray[800]};
      }
    }

    &__value-container {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    &__single-value {
      color: ${(props) => props.customTheme.colors.white};
      font-weight: bold;
      opacity: 1;
      transition: opacity 300ms;
      &--is-disabled {
        opacity: 0;
      }
    }

    &__placeholder {
      color: ${(props) => props.customTheme.colors.gray[500]};
      font-weight: bold;
    }

    &__indicator {
      &-separator {
        display: none;
      }
    }
  }
`;
