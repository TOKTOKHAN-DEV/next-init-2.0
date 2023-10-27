import { AsyncFn } from '@/types/static/async-fn';

/**
 * @example 
    type Example = AsyncFnReturn<() => Promise<number>>;
    Example = number
 */

export type AsyncFnReturn<T extends AsyncFn> = Awaited<ReturnType<T>>;
