export type Paginated<T> = {
  next: string | null;
  results: T;
};
