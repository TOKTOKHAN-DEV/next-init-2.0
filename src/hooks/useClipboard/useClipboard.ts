import { useToast } from '@chakra-ui/react';

function useClipboard() {
  const toast = useToast();
  const copyCode = (copiedCode: string) => {
    try {
      navigator.clipboard.writeText(`${copiedCode}`);
      toast({ description: '코드 복사 완료', status: 'success' });
    } catch {
      toast({ description: '코드 복사 실패', status: 'error' });
    }
  };

  return { copyCode };
}

export default useClipboard;
