import type { Readable } from './lib';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export declare function subscribe__multi<I extends unknown>(store_a1: Readable<I>[], fn: ((store_a1: Readable<I>[]) => void)): () => Unsubscriber[];
