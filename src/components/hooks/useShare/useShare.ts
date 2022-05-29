import { useToast } from '@chakra-ui/react';

function useShare() {
  const toast = useToast();
  const share = (text: string) => {
    try {
      navigator.share({ url: text });
    } catch {
      const textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.value = text;
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      toast({ description: '링크가 복사되었습니다.', status: 'success' });
    }
  };

  return { share };
}

export default useShare;
