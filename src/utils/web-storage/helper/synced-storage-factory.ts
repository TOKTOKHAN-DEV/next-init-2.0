import { ReactSyncConnector } from '@/utils/react/react-sync-connector';

import { SyncedStorage } from './synced-storage';

export class SyncedStorageFactory {
  static createLocal = <Data>(key: string) => {
    const store = typeof window === 'undefined' ? null : localStorage;
    return this.create<Data>(key, store); //
  };

  static createSession = <Data>(key: string) => {
    const store = typeof window === 'undefined' ? null : sessionStorage;
    return this.create<Data>(key, store);
  };

  static create = <Data>(key: string, store: Storage | null) => {
    const storage = store ? new SyncedStorage<Data>(key, store) : null;
    const connector = new ReactSyncConnector(storage);

    return { storage, connector };
  };
}
