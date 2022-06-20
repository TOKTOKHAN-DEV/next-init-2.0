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
import { OUTER_LINKS } from '@constants/outer-links';
import { ROUTES } from '@constants/routes';

import SummaryCard from './SummaryCard';

interface StarterDocsPagePageContentProps extends BoxProps {}

function StarterDocsPagePageContent({
  ...basisProps
}: StarterDocsPagePageContentProps) {
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
            Welcome!
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
            href={OUTER_LINKS.NOTION_CONVENTION}
          >
            <SummaryCard
              h="100%"
              title="Convention"
              description="코딩하며 지켜야 할 똑.개 규칙"
            />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            href={ROUTES.STARTER_DOCS.THEME_VIEWER}
          >
            <SummaryCard
              h="100%"
              title="Theme Viewer"
              description="프로젝트에 셋팅 되어있는 테마"
            />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            href={ROUTES.STARTER_DOCS.EXAMPLES.MAIN}
          >
            <SummaryCard
              h="100%"
              title="Example"
              description="참고할 예시 페이지"
            />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            target="_black"
            href={OUTER_LINKS.NOTION_SCRIPT}
          >
            <SummaryCard
              h="100%"
              title="Script"
              description="개발을 도와줄 스크립트"
            />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            target="_black"
            href={OUTER_LINKS.NOTION_GIT_FLOW}
          >
            <SummaryCard
              h="100%"
              title="Git flow"
              description="협업 시 Git flow"
            />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            target="_black"
            href={OUTER_LINKS.NOTION_SUMMARY}
          >
            <SummaryCard
              h="100%"
              title="OnBoarding Summary"
              description="온보딩 과정 중 학습할 내용에 관한 요약"
            />
          </LinkButton>
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default StarterDocsPagePageContent;

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
