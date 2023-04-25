import NextLink from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/components/link/usage#usage-with-nextjs
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
