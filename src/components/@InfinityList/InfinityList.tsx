import { isEmpty } from 'lodash-es';

import { Box, Center, Spinner } from '@chakra-ui/react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { ListRenderItem, VirtualizedListProps } from './types';

interface InfinityListProps<T> extends VirtualizedListProps {
  data?: ReadonlyArray<T>;
  renderItem?: ListRenderItem<T>;
}

const InfinityList = <T,>({
  data,
  renderItem,
  hasMore,
  isFetching,
  options,
  onFetchMore,
  ListEmptyComponent,
}: InfinityListProps<T>) => {
  const { targetRef: bottomRef } = useIntersectionObserver({
    callback: () => {
      if (!isFetching && hasMore) {
        onFetchMore();
      }
    },
    options: {
      root: options?.root || null,
      rootMargin: options?.rootMargin || '0px',
      threshold: options?.threshold || 0.5,
    },
  });

  if (isEmpty(data))
    return (
      <Center w={'100%'} flex={1}>
        {ListEmptyComponent}
      </Center>
    );

  return (
    <Box w={'100%'}>
      {data?.map((item, index) => (
        <Box key={index}>{renderItem?.({ item, index })}</Box>
      ))}
      <Box ref={bottomRef}>
        {isFetching && (
          <Center>
            <Spinner size={'sm'} />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default InfinityList;
