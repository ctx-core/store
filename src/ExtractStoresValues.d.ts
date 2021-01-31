import type { Stores } from './Stores';
import type { Readable } from './readable';
export declare type ExtractStoresValues<I extends Stores, E extends unknown = unknown> = I extends (Readable<infer O>) ? O : {
    [K in keyof I]: (I[K] extends (Readable<infer O>) ? O : Extract<I[K], Readable<unknown>> extends Readable<infer O> ? O : E);
};
