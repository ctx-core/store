import type { Readable } from './readable';
export declare type readable_infer_type<I> = I extends Readable<infer O> ? O : never;
