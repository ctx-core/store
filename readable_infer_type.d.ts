import type { Readable } from './lib';
export declare type readable_infer_type<I extends Readable<unknown>> = I extends (infer O) ? O : never;
