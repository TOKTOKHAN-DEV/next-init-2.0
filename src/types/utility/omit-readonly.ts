import { Obj } from '@/types/static/obj';

import { ReadonlyKeysOf } from './readonly-keys-of';

/**
 * @example
    type Example = OmitReadOnly<{
      readonly a: number;
      b: string;
      readonly c: string;
    }>;
    Example = { b : string; }
*/

export type OmitReadOnly<T extends Obj> = Omit<T, ReadonlyKeysOf<T>>;
