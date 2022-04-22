import Link, { LinkProps } from 'next/link';

import { Button, ButtonProps } from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/typography/text
 * @see Docs https://nextjs.org/docs/api-reference/next/link
 */

export interface LinkButtonProps extends LinkProps, Omit<ButtonProps, 'as'> {}

const LinkButton = ({
  href, // Next Link Props
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  locale,

  ...props
}: LinkButtonProps) => {
  return (
    <Link //
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <Button //
        as="a"
        {...props}
      />
    </Link>
  );
};

export default LinkButton;
