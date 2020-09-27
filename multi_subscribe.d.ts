import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './readable';
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export declare function multi_subscribe<I extends unknown, J extends Readable<any> = Readable<any>>(store_a1: J[], fn: (($store_a1: I[]) => void)): () => Unsubscriber[];
export declare const subscribe__multi: typeof multi_subscribe;
