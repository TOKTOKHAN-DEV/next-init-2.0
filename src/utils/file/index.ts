export const bytesToMB = (bytes: number) => bytes / 1024 ** 2;
export const mbToBytes = (mb: number) => mb * 1024 ** 2;

export const isOverSize = (
  file: File,
  options?: {
    /** defalt: 10 */
    maxSize?: number;
    /** default: mb */
    sizeType?: 'byte' | 'megaByte' | 'b' | 'mb';
  },
): boolean => {
  const { maxSize = 10, sizeType = 'mb' } = options || {};
  const isByte = sizeType === 'b' || sizeType === 'byte';
  const isMB = sizeType === 'mb' || sizeType === 'megaByte';

  if (isByte) return maxSize < file.size;
  if (isMB) return maxSize < bytesToMB(file.size);

  return false;
};

export const fileToBase64 = (
  file: File,
): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const isBase64Img = (baseurl: unknown): baseurl is string => {
  if (typeof baseurl !== 'string') return false;
  const [meta] = baseurl.split(';');
  return meta.includes('data:image');
};
