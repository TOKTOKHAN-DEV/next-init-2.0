import { PropsWithChildren } from 'react';

import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export interface LinkAsNextProps
  extends PropsWithChildren<
    Omit<NextLinkProps, 'passHref'> & Omit<ChakraLinkProps, 'as' | 'href'>
  > {}

/**
 * @see Docs https://chakra-ui.com/docs/components/link/usage#usage-with-nextjs
 */
const LinkAsNext = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: LinkAsNextProps) => {
  return (
    <NextLink
      href={href}
      as={as}
      passHref={true}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      style={{ width: '100%' }}
    >
      <ChakraLink //
        as={'span'}
        {...chakraProps}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default LinkAsNext;
