import { useToast } from '@chakra-ui/react';

function useShare() {
  const toast = useToast();
  const share = async (text: string) => {
    try {
      await window.navigator.clipboard.writeText(text);
      toast({ description: '링크가 복사되었습니다.', status: 'success' });
    } catch {
      toast({ description: '', status: 'warning' });
    }
  };

  return { share };
}

export default useShare;
