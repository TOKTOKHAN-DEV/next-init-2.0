import React from 'react';

import { motion } from 'framer-motion';

import {
  Box,
  BoxProps,
  Center,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';

import SummaryCard from './SummaryCard';

interface ExamplesPageContentProps extends BoxProps {}

function ExamplesPageContent({ ...basisProps }: ExamplesPageContentProps) {
  return (
    <Box {...basisProps}>
      <Center
        flexDirection="column"
        h={`calc(100vh - ${LAYOUT.HEADER.HEIGHT})`}
      >
        <Flex alignItems="center" mb="50px">
          <RotateBox
            mx="20px"
            bg="cyan.500"
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          />
          <Text color="primary.500" textStyle="xl" fontWeight="bold">
            참고할 예시 페이지
          </Text>
          <RotateBox
            mx="20px"
            bg="secondary.500"
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </Flex>
        <SimpleGrid spacing="20px" columns={2} w="700px" h="fit-content">
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            target="_black"
            href={ROUTES.STARTER_DOCS.EXAMPLES.COUNTER}
          >
            <SummaryCard h="100%" title="redux-toolkit 예시" description="" />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            href={ROUTES.STARTER_DOCS.EXAMPLES.FORM}
          >
            <SummaryCard h="100%" title="react-hook-form 예시" description="" />
          </LinkButton>
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default ExamplesPageContent;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
const RotateBox = (props: Parameter<typeof MotionBox>) => (
  <MotionBox
    bg="red.500"
    w="10px"
    h="10px"
    transition={{ repeat: Infinity, duration: 2 }}
    animate={{
      repeatCount: Infinity,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 200, 200, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    {...props}
  />
);
