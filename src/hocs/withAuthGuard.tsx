import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useAppStore from '@features/useAppStore';

import { ROUTES } from '@constants/routes';

export default function withAuthGuard<T>(AppComponent: React.ComponentType<T>) {
  return function WrappedAppComponent(props: T) {
    const router = useRouter();
    const isLogin = useAppStore((state) => state.USER.isLogin);

    useEffect(() => {
      if (isLogin === false)
        router.replace(
          `${ROUTES.LOGIN}?returnUrl=${encodeURIComponent(router.asPath)}`,
        );
    }, [isLogin, router]);

    return isLogin ? <AppComponent {...props} /> : <></>;
  };
}
