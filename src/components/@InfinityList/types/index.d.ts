import { ReactNode } from 'react';

export type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};
export type ListRenderItem<T> = (
  info: ListRenderItemInfo<T>,
) => ReactNode | null;

export type VirtualizedListProps = {
  hasMore: boolean;
  isFetching: boolean;
  onFetchMore: () => void;
  options?: IntersectionObserverInit;
  ListEmptyComponent?: ReactNode;
};
