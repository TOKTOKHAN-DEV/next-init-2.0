import { isOverSize } from '../is-over-size';

describe('isOverSize', () => {
  const createFile = (size: number): File => {
    const file = new File([], 'test.jpg', {
      type: 'image/jpeg',
    });
    Object.defineProperty(file, 'size', {
      get() {
        return size;
      },
    });
    return file;
  };

  it('returns true if the file size is greater than the maximum byte size', () => {
    const file = createFile(15 * 1024);
    const result = isOverSize(file, { maxSize: 10, sizeType: 'byte' });
    expect(result).toBe(true);
  });

  it('returns true if the file size is greater than the maximum MB size', () => {
    const file = createFile(15 * 1024 * 1024);
    const result = isOverSize(file, { maxSize: 10, sizeType: 'mb' });
    expect(result).toBe(true);
  });

  it('returns false if the file size is less than the maximum size', () => {
    const file = createFile(5 * 1024 * 1024);
    const result = isOverSize(file, { maxSize: 10, sizeType: 'mb' });
    expect(result).toBe(false);
  });

  it('returns false if the file size is equal to the maximum size', () => {
    const file = createFile(10 * 1024 * 1024);
    const result = isOverSize(file, { maxSize: 10, sizeType: 'mb' });
    expect(result).toBe(false);
  });
});
