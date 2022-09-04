import React from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';
import SummaryCard from '@components/common/SummaryCard';

import { ROUTES } from '@constants/routes';

function ExamplesPage() {
  return (
    <SimpleGrid spacing="20px" columns={2} w="700px" h="fit-content">
      <LinkButton
        h="140px"
        w="100%"
        variant="unstyled"
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
      <LinkButton
        h="140px"
        w="100%"
        variant="unstyled"
        href={ROUTES.STARTER_DOCS.EXAMPLES.MODALS}
      >
        <SummaryCard h="100%" title="모달 예시" description="" />
      </LinkButton>

      <LinkButton
        h="140px"
        w="100%"
        variant="unstyled"
        href={ROUTES.STARTER_DOCS.EXAMPLES.LODASH}
      >
        <SummaryCard h="100%" title="throttle & debounce 예시" description="" />
      </LinkButton>
      <LinkButton
        h="140px"
        w="100%"
        variant="unstyled"
        href={ROUTES.STARTER_DOCS.EXAMPLES.SOCIAL}
      >
        <SummaryCard h="100%" title="소셜로그인 예시" description="" />
      </LinkButton>
    </SimpleGrid>
  );
}

export default ExamplesPage;
