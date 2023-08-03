import { ReactSyncConnector } from '../react-sync-connector';
import { ReactSynced } from '../react-synced';

describe('ReactSyncConnector', () => {
  it('should call listener when data is changed', () => {
    const synced = new ReactSynced<number>();
    const connector = new ReactSyncConnector(synced);

    let notified = false;
    const listener = () => {
      notified = true;
    };

    connector.subscribe(listener);
    synced.data = 123;

    expect(connector.getSnapshot()).toBe(123);
    expect(notified).toBe(true);

    connector.subscribe(() => {
      notified = false;
    });
    synced.data = 456;

    expect(connector.getSnapshot()).toBe(456);
    expect(notified).toBe(false);

    synced.unConnect();
  });

  it('should return null if synced is not connected', () => {
    const connector = new ReactSyncConnector(null);

    expect(connector.getSnapshot()).toBe(null);
    expect(connector.getServerSnapShot()).toBe(null);
  });
});
