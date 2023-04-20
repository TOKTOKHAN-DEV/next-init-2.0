import { Obj } from '@/types/static/obj';

// type Example = ValueOf<{ a: number; b: string }>;
// Example = number | string

export type ValueOf<T> = T extends Obj ? T[keyof T] : unknown;
