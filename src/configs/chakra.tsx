import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

interface ChakraProps extends ChakraProviderProps {
  cookies: string;
}

export const Chakra = ({ cookies, children, ...restProps }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  console.log('cookies', cookies);
  return (
    <ChakraProvider colorModeManager={colorModeManager} {...restProps}>
      {children}
    </ChakraProvider>
  );
};

export function getServerSideProps({ req }: { req: any }) {
  console.log('req', req);
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
