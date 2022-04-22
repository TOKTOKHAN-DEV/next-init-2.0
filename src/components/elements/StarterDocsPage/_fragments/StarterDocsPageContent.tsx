import React from 'react';

import { Box, BoxProps, Center, SimpleGrid, Text } from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';

import { LAYOUT } from '@constants/layout';
import { OUTER_LINKS } from '@constants/outer-links';
import { ROUTES } from '@constants/routes';

import SummaryCard from './SummaryCard';

interface StarterDocsPagePageContentProps extends BoxProps {}

function StarterDocsPagePageContent({ ...basisProps }: StarterDocsPagePageContentProps) {
  return (
    <Box {...basisProps}>
      <Center flexDirection="column" h={`calc(100vh - ${LAYOUT.HEADER.HEIGHT})`}>
        <Text color="primary.500" textStyle="xl" fontWeight="bold" mb="50px">
          Welcome!
        </Text>
        <SimpleGrid spacing="20px" columns={2} w="700px" h="fit-content">
          <LinkButton h="140px" w="100%" variant="unstyled" target="_black" href={OUTER_LINKS.NOTION_CONVENTION}>
            <SummaryCard h="100%" title="Convention" description="코딩하며 지켜야 할 똑.개 규칙" />
          </LinkButton>
          <LinkButton h="140px" w="100%" variant="unstyled" href={ROUTES.STARTER_DOCS.THEME_VIEWER}>
            <SummaryCard h="100%" title="Theme Viewer" description="프로젝트에 셋팅 되어있는 테마" />
          </LinkButton>
          <LinkButton h="140px" w="100%" variant="unstyled" href="#">
            <SummaryCard h="100%" title="Example" description="참고할 예시 페이지" />
          </LinkButton>
          <LinkButton h="140px" w="100%" variant="unstyled" target="_black" href={OUTER_LINKS.NOTION_SCRIPT}>
            <SummaryCard h="100%" title="Script" description="개발을 도와줄 스크립트" />
          </LinkButton>
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default StarterDocsPagePageContent;
