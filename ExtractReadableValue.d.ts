import type { Readable } from './lib';
export declare type ExtractReadableValue<I extends Readable<unknown>, E extends unknown = unknown> = I extends (Readable<infer O>) ? O : Extract<I, Readable<unknown>> extends Readable<infer O> ? O : E;
