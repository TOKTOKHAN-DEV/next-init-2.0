// https://tkdodo.eu/blog/effective-react-query-keys
export const userKeys = {
  all: ['user'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
};
