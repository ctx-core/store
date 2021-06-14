import type { Readable } from './readable';
export declare type ExtractReadableValue<Store extends Readable<unknown>, Else extends unknown = unknown> = Store extends (Readable<infer Val>) ? Val : Extract<Store, Readable<unknown>> extends Readable<infer O> ? O : Else;
