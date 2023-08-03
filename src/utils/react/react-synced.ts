export class ReactSynced<T> {
  private _data: T | null = null;
  public listener: (() => void) | null = null;

  get data(): T | null {
    return this._data;
  }

  set data(data: T | null) {
    this._data = data;
    this.listener?.();
  }

  connect = (listener: () => void) => {
    this.listener = listener;
  };

  unConnect = () => {
    this.listener = null;
  };
}
