import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import {
  CheckedOffIcon,
  CheckedOnIcon,
} from '@components/common/@Icons/System';

export interface CheckBoxProps {
  checked: boolean;
  children?: string | JSX.Element;
}

const CheckBox = ({ checked, children, ...props }: CheckBoxProps) => {
  return (
    <Flex cursor="pointer" alignItems="center" {...props}>
      {checked ? (
        <CheckedOnIcon w="20px" h="20px" color="primary" />
      ) : (
        <CheckedOffIcon w="20px" h="20px" color="primary" />
      )}
      {typeof children === 'string' ? (
        <Text textStyle="md" ml="5px" color="gray3">
          {children}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export default CheckBox;
