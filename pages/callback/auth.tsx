// 0Auth Callback Process
import { useEffect } from 'react';
import { Spinner, Flex } from '@chakra-ui/react';
import Router from 'next/router';

const Loading = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const access = urlParams.get('access');
    const refresh = urlParams.get('refresh');
    const next = urlParams.get('next');
    if (access && refresh) {
      localStorage.setItem('@token', JSON.stringify({ access, refresh }));
      Router.replace(next ? next : '/');
    } else {
      alert('잘못된 경로 입니다.');
      Router.replace('/');
    }
  }, []);

  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Spinner size="lg" />
    </Flex>
  );
};

export default Loading;
