import type { Stores } from './Stores';
export declare type stores_infer_type<I extends Stores<unknown>> = I extends (infer O) ? O : never;
