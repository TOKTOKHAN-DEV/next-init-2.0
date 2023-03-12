import { ThemeConfig } from '@chakra-ui/react';

/**
 * System color mode를 사용하고 싶을 경우 아래와 같이 설정해주세요.
 * initialColorMode: 'system',
   useSystemColorMode: true, // true 일 경우 앱이 system color mode를 따릅니다. 
 * @see Docs https://chakra-ui.com/docs/styled-system/color-mode
 */
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export default config;
