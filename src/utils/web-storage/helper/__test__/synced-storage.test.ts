import { SyncedStorage } from '../synced-storage';

describe('SyncedStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should get data from storage', () => {
    localStorage.setItem('test', JSON.stringify({ value: 123 }));
    const storage = new SyncedStorage('test', localStorage);

    expect(storage.get()).toEqual({ value: 123 });
  });

  it('should set data to storage', () => {
    const storage = new SyncedStorage('test', localStorage);
    storage.set({ value: 123 });

    expect(JSON.parse(localStorage.getItem('test') || '')).toEqual({
      value: 123,
    });
  });

  it('should remove data from storage', () => {
    localStorage.setItem('test', JSON.stringify({ value: 123 }));
    const storage = new SyncedStorage('test', localStorage);
    storage.remove();

    expect(localStorage.getItem('test')).toBe(null);
  });

  it('should notify listeners when data is changed', () => {
    const storage = new SyncedStorage('test', localStorage);
    let notified = false;
    const listener = () => {
      notified = true;
    };

    storage.connect(listener);
    storage.set({ value: 123 });

    expect(storage.get()).toEqual({ value: 123 });
    expect(notified).toBe(true);

    storage.unConnect();
  });
});
