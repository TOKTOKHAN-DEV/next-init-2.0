import React from 'react';

import {
  Box,
  BoxProps,
  Center,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import * as Icons from 'generated/icons/MyIcons';

// 예시 아이콘 모달처리
interface GeneratedIconSectionProps extends BoxProps {}

function GeneratedIconSection({ ...basisProps }: GeneratedIconSectionProps) {
  return (
    <Box {...basisProps}>
      <SimpleGrid columns={4}>
        {Object.keys(Icons).map((key) => {
          const IconComponent = (Icons as any)[key] as typeof Icon;
          return (
            <Center flexDirection="column" key={key} mb="20px">
              <IconComponent width="40px" height="40px" color="primary.300" />
              <Text>{IconComponent.name}</Text>
            </Center>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default GeneratedIconSection;
