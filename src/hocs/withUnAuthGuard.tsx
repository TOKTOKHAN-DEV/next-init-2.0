import { useRouter } from 'next/router';
import { ComponentProps, ComponentType, useEffect } from 'react';

import { useAppStore } from '@features/store';

export default function withUnAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter();
    const isLogin = useAppStore((store) => store.USER.isLogin);

    useEffect(() => {
      if (isLogin === true)
        router.replace(
          router.query?.returnUrl
            ? decodeURIComponent(router.query?.returnUrl as string)
            : '/',
        );
    }, [isLogin, router]);

    return isLogin === false ? <AppComponent {...props} /> : <></>;
  };
}
