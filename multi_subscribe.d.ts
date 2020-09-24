import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './lib';
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export declare function multi_subscribe<I extends unknown>(store_a1: Readable<any>[], fn: (($store_a1: I[]) => void)): () => Unsubscriber[];
export declare const subscribe__multi: typeof multi_subscribe;
