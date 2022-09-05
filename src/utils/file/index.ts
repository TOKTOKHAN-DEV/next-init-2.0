export const bytesToMB = (bytes: number) => bytes / 1024 ** 2;
export const mbToBytes = (mb: number) => mb * 1024 ** 2;

export const isMaxSize = (
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
