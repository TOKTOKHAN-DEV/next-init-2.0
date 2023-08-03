import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /** 개발자 판단하에 설정해주세요 기본값은 0 입니다. */
      staleTime: 0,
      /** 개발자 판단하에 설정해주세요 기본값은 3 입니다. */
      retry: 1,
    },
  },
});
