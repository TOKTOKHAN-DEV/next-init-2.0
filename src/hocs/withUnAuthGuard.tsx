import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppStore } from '@features/store';

export default function withUnAuthGuard<P>(
  AppComponent: React.ComponentType<P>,
) {
  return function WrappedAppComponent(props: P) {
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
