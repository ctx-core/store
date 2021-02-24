import type { Readable } from './readable';
export declare type readable_infer_type<Store extends Readable<unknown> = Readable<unknown>> = Store extends Readable<infer Val> ? Val : never;
