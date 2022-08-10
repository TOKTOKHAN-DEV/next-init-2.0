import React from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';
import SummaryCard from '@components/common/SummaryCard';

import { OUTER_LINKS } from '@constants/outer-links';
import { ROUTES } from '@constants/routes';

function StarterDocsPage() {
  return (
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
        <SummaryCard h="100%" title="Git flow" description="협업 시 Git flow" />
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
  );
}

export default StarterDocsPage;
