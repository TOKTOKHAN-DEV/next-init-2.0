import { ReactSynced } from './react-synced';

export class ReactSyncConnector<Data> {
  listeners: Array<() => void> = [];
  constructor(private synced: ReactSynced<Data> | null) {
    this.synced = synced;
    this.synced?.connect(this.emitChange);
  }

  subscribe = (listener: () => void) => {
    if (this.synced) this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  getSnapshot = () => {
    return this.synced?.data ?? null;
  };

  getServerSnapShot = () => {
    return null;
  };

  emitChange = () => {
    for (const listener of this.listeners) {
      listener();
    }
  };
}
