export type WithPaginationParams<T> = {
  cursor?: string;
  limit?: number;
} & T;
