import type { readable_stores_type } from './readable_stores_type';
import type { Readable } from './readable';
export declare type readable_stores_val_type<Store extends readable_stores_type<unknown>> = Store extends Readable<infer N0_Val>[] ? N0_Val : Store extends Readable<infer N1_Val> ? N1_Val : never;
