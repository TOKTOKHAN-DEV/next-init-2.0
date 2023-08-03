import { useSyncWebStorage } from '@/hooks/useSyncWebStorage';

import { todoConnector } from '@/utils/web-storage/todo';
import { tokenConnector } from '@/utils/web-storage/token';

export const useWebStorage = () => {
  const token = useSyncWebStorage(tokenConnector);
  const todoList = useSyncWebStorage(todoConnector);

  return { token, todoList };
};
