import { ReactSynced } from '../react-synced';

describe('ReactSynced', () => {
  it('should update data and notify listener', () => {
    const synced = new ReactSynced<string>();
    let notified = false;
    const listener = () => {
      notified = true;
    };

    synced.connect(listener);
    synced.data = 'Hello, World!';

    expect(synced.data).toBe('Hello, World!');
    expect(notified).toBe(true);

    synced.unConnect();
  });

  it('should not notify listener after unconnect', () => {
    const synced = new ReactSynced<number>();
    let notified = false;
    const listener = () => {
      notified = true;
    };

    synced.connect(listener);
    synced.unConnect();
    synced.data = 123;

    expect(synced.data).toBe(123);
    expect(notified).toBe(false);
  });
});
