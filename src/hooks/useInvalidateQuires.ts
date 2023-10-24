import { useCallback } from 'react';

import { QueryKey, useQueryClient } from '@tanstack/react-query';

const useInvalidateQuires = () => {
  const queryClient = useQueryClient();

  const single = useCallback(
    (queryKey: QueryKey) => {
      return queryClient.invalidateQueries(queryKey);
    },
    [queryClient],
  );

  const multiple = useCallback(
    (queryKeys: QueryKey[]) => {
      const flatKeys = queryKeys.map((i) => i.concat());
      flatKeys.map((queryKey) => {
        return queryClient.invalidateQueries(queryKey);
      });
    },
    [queryClient],
  );

  return { single, multiple };
};

export default useInvalidateQuires;
