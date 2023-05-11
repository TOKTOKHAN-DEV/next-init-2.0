import { ReactNode } from 'react';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { QueryErrorResetBoundaryValue } from '@tanstack/react-query/build/lib/QueryErrorResetBoundary';
import { ErrorBoundary } from 'react-error-boundary';

import { PropsOf } from '@/types/module/react/props-of';
import { Parameter } from '@/types/utility/parameter';
import { isFunction } from '@/utils/validate/is-function';

type FallbackRenderParams = Parameter<
  PropsOf<typeof ErrorBoundary>['fallbackRender']
>;

type FallbackRenderFn = (
  props: QueryErrorResetBoundaryValue & Pick<FallbackRenderParams, 'error'>,
) => ReactNode;

export interface QueryErrorBoundaryProps {
  fallback: FallbackRenderFn | ReactNode;
  children: ReactNode | ReactNode;
}

export const QueryErrorBoundary = ({
  fallback,
  children,
}: QueryErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {(queryErrorBoundaryPrams) => (
        <ErrorBoundary
          onReset={queryErrorBoundaryPrams.reset}
          fallbackRender={(params) =>
            isFunction(fallback)
              ? fallback({ ...params, ...queryErrorBoundaryPrams })
              : fallback
          }
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
