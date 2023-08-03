import { ComponentProps, ComponentType, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

export default function withUnAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter();
    const isLogin = useGlobalContext((store) => store.state.isLogin);

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
