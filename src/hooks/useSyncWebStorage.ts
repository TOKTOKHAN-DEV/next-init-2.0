import { useSyncExternalStore } from 'react';

import { ReactSyncConnector } from '@/utils/react/react-sync-connector';

export const useSyncWebStorage = <T>(connector: ReactSyncConnector<T>) => {
  return useSyncExternalStore(
    connector.subscribe,
    connector.getSnapshot,
    connector.getServerSnapShot,
  );
};
