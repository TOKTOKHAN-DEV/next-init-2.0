/* eslint-disable @typescript-eslint/no-empty-function */
import { SyncedStorageFactory } from '../synced-storage-factory';

describe('SyncedStorageFactory', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create local storage', () => {
    const { storage, connector } = SyncedStorageFactory.createLocal<{
      value: number;
    }>('test');

    expect(storage?.key).toBe('test');
    expect(storage?.get()).toBe(null);
    expect(connector.listeners.length).toBe(0);

    const unsubscribe = connector.subscribe(() => {});
    expect(connector.listeners.length).toBe(1);

    unsubscribe();
    expect(connector.listeners.length).toBe(0);
  });

  it('should create session storage', () => {
    const { storage, connector } = SyncedStorageFactory.createSession<{
      value: number;
    }>('test');

    expect(storage?.key).toBe('test');
    expect(storage?.get()).toBe(null);
    expect(connector.listeners.length).toBe(0);

    const unsubscribe = connector.subscribe(() => {});
    expect(connector.listeners.length).toBe(1);

    unsubscribe();
    expect(connector.listeners.length).toBe(0);
  });

  it('should create null storage if store is null', () => {
    const { storage, connector } = SyncedStorageFactory.create<{
      value: number;
    }>('test', null);

    expect(storage).toBe(null);
    expect(connector.listeners.length).toBe(0);

    const unsubscribe = connector.subscribe(() => {});
    expect(connector.listeners.length).toBe(0);

    unsubscribe();
    expect(connector.listeners.length).toBe(0);
  });
});
