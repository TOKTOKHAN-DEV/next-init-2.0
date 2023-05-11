import { ReactNode, Suspense } from 'react';

import { PropsOf } from '@/types/module/react/props-of';

import {
  QueryErrorBoundary,
  QueryErrorBoundaryProps,
} from './QueryErrorBoundary';

interface DataLoadingBoundaryProps {
  onLoading?: PropsOf<typeof Suspense>['fallback'];
  onError?: QueryErrorBoundaryProps['fallback'];
  children: ReactNode | ReactNode[];
}

const DataLoadingBoundary = ({
  onLoading,
  onError,
  children,
}: DataLoadingBoundaryProps) => {
  if (onLoading && onError)
    return (
      <QueryErrorBoundary fallback={onError}>
        <Suspense fallback={onLoading}>{children}</Suspense>
      </QueryErrorBoundary>
    );
  if (onLoading) return <Suspense fallback={onLoading}>{children}</Suspense>;
  if (onError)
    return (
      <QueryErrorBoundary fallback={onError}>{children}</QueryErrorBoundary>
    );
  return <>{children}</>;
};

export default DataLoadingBoundary;
