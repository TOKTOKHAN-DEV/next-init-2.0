import { ReactSynced } from '@/utils/react/react-synced';

export class SyncedStorage<Data> extends ReactSynced<Data> {
  constructor(public key: string, private storage: Storage) {
    super();
    this.key = key;
    this.storage = storage;
    this.data = this.get();
  }

  get = (): Data | null => {
    if (this.data !== null) return this.data;
    const item = this.storage.getItem(this.key);
    if (item === null) return null;
    return JSON.parse(item);
  };

  set = (data: Data | null): void => {
    this.data = data;
    this.storage.setItem(this.key, JSON.stringify(data));
  };

  remove = (): void => {
    this.data = null;
    this.storage.removeItem(this.key);
  };
}
