import type { Readable } from './readable';
import type { Stores } from './Stores';
export declare function spread_derived<I extends Stores<unknown>, O extends unknown>(stores: I, fn: any, initial_value?: any): Readable<O>;
export declare const derived__spread: typeof spread_derived;
