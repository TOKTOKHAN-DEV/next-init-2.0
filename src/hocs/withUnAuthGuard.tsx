import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function withUnAuthGuard(AppComponent: NextPage<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    const router = useRouter();
    const { isLogin } = useSelector((state) => state.USER);

    useEffect(() => {
      if (isLogin === true)
        router.replace(
          router.query?.next
            ? decodeURIComponent(router.query?.next as string)
            : '/',
        );
    }, [isLogin]);

    return isLogin !== false ? <></> : <AppComponent {...props} />
  }
}
