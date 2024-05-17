import { ComponentProps, ComponentType, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useLogin } from '@/hooks/useLogin';

import { ROUTES } from '@/constants/routes';

export default function withAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter();
    const { isLogin } = useLogin();

    useEffect(() => {
      if (isLogin === false)
        router.replace(
          `${ROUTES.LOGIN}?returnUrl=${encodeURIComponent(router.asPath)}`,
        );
    }, [isLogin, router]);

    return isLogin ? <AppComponent {...props} /> : <></>;
  };
}
