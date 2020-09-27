import type { readable_stores_type } from './readable_stores_type';
import type { Readable } from './readable';
export declare type readable_stores_val_type<I extends readable_stores_type<unknown>> = I extends Readable<infer O>[] ? O : I extends Readable<infer O> ? O : never;
