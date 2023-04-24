import NextLink from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/typography/text
 * @see Docs https://nextjs.org/docs/api-reference/next/link
 */

const LinkAsNext = (props: ChakraLinkProps) => {
  return (
    <ChakraLink //
      as={NextLink}
      {...props}
    />
  );
};

export default LinkAsNext;
