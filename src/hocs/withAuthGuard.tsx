import { useRouter } from 'next/router';
import { ComponentProps, ComponentType, useEffect } from 'react';

import { useAppStore } from '@features/store';

import { ROUTES } from '@constants/routes';

export default function withAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter();
    const isLogin = useAppStore((store) => store.USER.isLogin);

    useEffect(() => {
      if (isLogin === false)
        router.replace(
          `${ROUTES.LOGIN}?returnUrl=${encodeURIComponent(router.asPath)}`,
        );
    }, [isLogin, router]);

    return isLogin ? <AppComponent {...props} /> : <></>;
  };
}
