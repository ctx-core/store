import type { writable_stores_T } from './writable_stores_T';
import type { Writable } from './writable';
export declare type writable_stores_val_T<Store extends writable_stores_T<unknown>> = Store extends Writable<infer O>[] ? O : Store extends Writable<infer O> ? O : never;
