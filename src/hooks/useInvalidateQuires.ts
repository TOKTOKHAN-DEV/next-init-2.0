import { useCallback } from 'react';

import { QueryKey, useQueryClient } from '@tanstack/react-query';

const useInvalidateQuires = () => {
  const queryClient = useQueryClient();

  const invalidate = useCallback(
    (...queryKeys: QueryKey[]) => {
      queryKeys.forEach((queryKey) => queryClient.invalidateQueries(queryKey));
    },
    [queryClient],
  );

  return invalidate;
};

export default useInvalidateQuires;
